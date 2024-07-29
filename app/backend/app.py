# importing flask and flack_cors modules
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from prediction import prediction
from prediction import fetcher

# create an instance of the Flask app
app = Flask(__name__)

# Enable CORS and accept requests from http://localhost:3000
CORS(app, origins=['http://localhost:3000'])

# define route /get and accept POST requests


@app.route('/get', methods=['POST', 'OPTIONS'])
# apply cors setting specifically form localhost route
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def get_data():
    data = request.get_json()  # extract json request
    Symptoms = data['Symptoms']  # extract Symptoms from json request
    predicted_disease = prediction(Symptoms)
    desc, pre, medic, dit, wrkout = fetcher(predicted_disease)
    print(fetcher(predicted_disease))
    # return the Data in json format
    return jsonify({'Disease': predicted_disease, 'Description': desc,
                    'Precautions': pre, 'Medication': medic,
                    'Diet': dit, 'Workout': wrkout})


# run the app on http://localhost:5000
if __name__ == '__main__':
    app.run(debug=True)
