{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 from flask import Flask, request, jsonify\
import requests\
\
app = Flask(__name__)\
\
# Mock database of known token issuers\
KNOWN_ISSUERS = \{\
    "brand1_public_key": "Brand1",\
    "brand2_public_key": "Brand2"\
\}\
\
OPEN_SEA_API_URL = "https://api.opensea.io/api/v1/asset"\
\
@app.route('/verify', methods=['POST'])\
def verify_token():\
    token_address = request.json.get('token_address')\
    token_id = request.json.get('token_id')\
    \
    token_details = fetch_token_details_from_opensea(token_address, token_id)\
    issuer = token_details.get('issuer')\
    \
    is_known_issuer = issuer in KNOWN_ISSUERS\
    response = \{\
        "token_details": token_details,\
        "is_known_issuer": is_known_issuer,\
        "known_issuer_name": KNOWN_ISSUERS.get(issuer) if is_known_issuer else None\
    \}\
    return jsonify(response)\
\
def fetch_token_details_from_opensea(token_address, token_id):\
    # Fetch token details from OpenSea\
    response = requests.get(f"\{OPEN_SEA_API_URL\}/\{token_address\}/\{token_id\}")\
    data = response.json()\
    return \{\
        "issuer": data['asset_contract']['address'],  # This is the contract address, you may need to determine the actual issuer's name from this.\
        "metadata": data['token_metadata']\
    \}\
\
if __name__ == '__main__':\
    app.run(debug=True)}