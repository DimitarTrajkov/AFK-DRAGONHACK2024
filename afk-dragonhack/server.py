import pandas as pd
from flask import Flask
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app)

models = []
random_forest_model_SA = load('random_forest_model_SA.joblib')
random_forest_model_MX = load('random_forest_model_MX.joblib')
random_forest_model_IQ = load('random_forest_model_IQ.joblib')
random_forest_model_CA = load('random_forest_model_CA.joblib')
models.extend([random_forest_model_SA, random_forest_model_MX, random_forest_model_IQ, random_forest_model_CA])

@app.route('/get_data', methods=['GET'])
def get_data():
    allResults = []
    
    for model in models:
        data_to_predict = pd.DataFrame({'month': [2]})
        prediction = model.predict(data_to_predict)
        result=float(prediction[0])
        allResults.append(result)

        data_to_predict = pd.DataFrame({'month': [3]})
        prediction = model.predict(data_to_predict)
        result=float(prediction[0])
        allResults.append(result)
    print("printam allResults:", allResults)
    return allResults

if __name__ == '__main__':
    app.run(debug=True)
