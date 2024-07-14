# Documentation

This section explains the important code files in our repository. It lays out the methods and functions in each file, stating their arguments, return value, and purpose.

## 1. Codebase Structure

The important files in our codebase are listed below:

```
.
├── api/
│   ├── controllers/
│   │   └── classificationController.js
│   ├── routes/
│   │   └── classificationRoutes.js
│   ├── services/
│   │   ├── classificationService.js
│   │   └── hazardDefinitionService.js
│   └── app.js
├── frontend/
│   ├── app.py
│   └── hazard_definitions.xlsx
└── tools/
    ├── AssociationMatrix/
    │   ├── llamaCTransformerAssocGenerator.py
    │   └── run_assocMat.sh
    ├── ConfusionMatrix/
    │   ├── ConfusionMatrix.py
    │   └── run_confMat.sh
    ├── data/
    │   ├── confusion_matrix.xlsx
    │   ├── hazard_definitions.xlsx
    │   └── scores.xlsx
    └── setup_tools.sh
```

## 2. API Documentation

### 2.1 App.js

This creates the ExpressJS application, uses the classification routes, and exposes the application layer on the `classify` function for Google Cloud.

### 2.2 classificationRoutes.js

This file defines the API routes connecting requests to the controller layer.

### 2.3 classificationController.js

| Function Name | Full Function Definition | Description |
| --- | --- | --- |
| startClassification | `startClassification(req, res) => Object` | Starts the rules based classification process. Uses keyword matching to identify hazards in the report. |
| refineClassification | `refineClassification(req, res) ⇒ Object` | Uses the confirmed and rejected hazards to refine the classification by looking for hazards with the confirmed hazards in the upstream hazards. |
| startGPTClassification | `startGPTClassification(req, res) ⇒ Object` | Uses ChatGPT to classify the report, sending the report to the ChatGPT API along with the hazard definitions to get the classification. |
| startCombinedClassification | `startCombinedClassification(req, res) ⇒ Object` | Classifies the report using both the rules-based and GPT classification routes, returning the combined questions. |
| getHazardsByCode | `getHazardsByCode(req, res) ⇒ Object` | Retrieves the full hazard information for the given hazard codes |

### 2.4 classificationService

| Function Name | Full Function Definition | Description |
| --- | --- | --- |
| startClassification | `startClassification(report) ⇒ Array` | Starts the hazard classification process based on a given report. Retrieves hazard definitions and generates report-specific questions. |
| startGPTClassification | `startGPTClassification(report) ⇒ Array` | Starts the GPT-based hazard classification process based on a given report. Retrieves hazard definitions and identifies hazards based on OpenAI ChatGPT classification. |
| refineClassification | `refineClassification(confirmed, rejected) ⇒ Array` | Refines the hazard classification process based on confirmed and rejected hazards. Retrieves hazard definitions and collates associated hazards. |
| getHazardsByCode | `getHazardsByCode(hazardCodes) ⇒ Array` | Retrieves hazard information based on hazard codes. |
| startCombinedClassification | `startCombinedClassification(report) ⇒ Array` | Starts the combined hazard classification process based on a given report. Retrieves hazard definitions and generates both GPT and report-specific questions. |
| getReportQuestions | `getReportQuestions(reportText, hazardDefinitions) ⇒ Array` | Generates report-specific questions based on a given report and hazard definitions. |
| getHazardList | `getHazardList(hazardDefinitions, report) ⇒ Array` | Retrieves a comprehensive hazard list using GPT API based on a given report and hazard definitions. |
| getHazardQuestion | `getHazardQuestion(hazardCode, hazardDefinitions) ⇒ string \/ null` | Retrieves the question for a specific hazard code from hazard definitions. |
| getGPTQuestions | `getGPTQuestions(report, hazardDefinitions) ⇒ Array` | Uses ChatGPT to identify hazards in a report by sending a request to the ChatGPT API |
| groupHazardsByCategory | `groupHazardsByCategory(hazards) ⇒ Array` | Groups hazards by category. |
| getUpstreamQuestions | `getUpstreamQuestions(confirmed, rejected, hazardDefinitions) ⇒ Array` | Searches the hazard_definitions for hazards associated with the input hazard |

### 2.5 hazardDefinitionService.js

| Function Name | Full Function Definition | Description |
| --- | --- | --- |
| getHazardDefinitions | `getHazardDefinitions() ⇒ Array` | Accesses the hazard_definitions.json stored in the hazard_definitions_bucket, parses it, and returns it |

## 3. llamaCTransformerAssocGenerator.py

| Function Name | Full Function Definition | Description |
| --- | --- | --- |
| extract_score | `extract_score(response) ⇒ int`  | Extracts the likelihood score from the LLM's response. |
| find_first_missing_pair | `find_first_missing_pair(dataframe) ⇒ tuple \/ None` | Finds the first pair of row and column categories in a DataFrame where the corresponding element is missing. |
| run_llm | `run_llm(hazard1, hazard2, def1, def2) ⇒ tuple` | Run a likelihood assessment using a Language Model (LLM) to evaluate the likelihood that a given hazard1 causes hazard2. |
| find_invalid_pairs | `find_invalid_pairs() ⇒ List(tuple)` | Finds pairs of row and column categories in the scores DataFrame where the corresponding element is -1 |

## 4. ConfusionMatrix.py

| Function Name | Full Function Definition | Description |
| --- | --- | --- |
| init | `__init__(self, model: str, data_file_path: str, output_folder: str)` | Initializes the ConfusionMatrixGenerator class. |
| find_category_lines | `find_category_lines(self, categories: pd.Series) -> List[int]` | Finds the positions of category boundaries in the similarity matrix. |
| visualize_heatmap | `visualize_heatmap(self, similarity_matrix: np.ndarray, line_positions_ordered: List[int]) -> None` | Visualizes the similarity matrix as a heatmap with ordered category lines. Uses matplotlib. |
| save_similarity_matrix | `save_similarity_matrix(self, similarity_matrix: np.ndarray) -> None` | Saves the similarity matrix as an Excel file. |
| generate_similarity_pairs | `generate_similarity_pairs(self, similarity_matrix: np.ndarray) -> pd.DataFrame` | Generate pairs of hazard codes along with their similarity scores based on a similarity matrix. |
| filter_similarity_pairs | `filter_similarity_pairs(self, similarity_pairs_df: pd.DataFrame) -> pd.DataFrame` | Filters the similarity pairs based on the similarity score. |
| generate_confused_hazards | `generate_confused_hazards(self, similarity_matrix: np.ndarray, similarity_pairs_df: pd.DataFrame) -> pd.DataFrame` | Creates a dataframe with the most similar hazards for each hazard. |
| save_confused_pairs | `save_confused_pairs(self, confused_pairs_df: pd.DataFrame) -> None` | Saves the confused pairs as Excel and JSON files.
 |
| add_confused_to_definitions | `add_confused_to_definitions(self, confusion_df: pd.DataFrame, hazard_definitions: pd.DataFrame) -> pd.DataFrame`| Adds the confused hazards to the hazard definitions. |
| show_plotly_heatmap | `show_plotly_heatmap(self, similarity_matrix: np.ndarray, labels_list: List[str]) -> None` | Visualizes the similarity matrix as an interactive heatmap using Plotly. |
| run_plotly_heatmap | `run_plotly_heatmap(self) -> None` | Runs the ConfusionMatrixGenerator to generate and display an interactive heatmap using Plotly. |
| run | `run(self) -> None` | Runs the ConfusionMatrixGenerator to generate and save the confusion matrix and other outputs. |

## 5. Data Documentation

| Database Name | Type | Description |
| --- | --- | --- |
| confusion_matrix.xlsx | Excel Spreadsheet | A 303x303 matrix in which the cosine similarity score of the embeddings of pairs of hazards is stored. |
| scores.xlsx | Excel Spreadsheet | A 303x303 matrix in which the association probability score of each pairs of hazards is stored. |
| hazard_definitions.xlsx | Excel Spreadsheet | The full database containing comprehensive information of all hazards. Includes upstream hazards and easily confused hazards. |