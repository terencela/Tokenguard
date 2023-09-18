{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function getTokenDetailsFromWebpage() \{\
    return "sample_token_id";\
\}\
\
function verifyTokenWithAPI(token_id) \{\
    const API_URL = "http://localhost:5000/verify";\
    fetch(API_URL, \{\
        method: "POST",\
        headers: \{\
            "Content-Type": "application/json"\
        \},\
        body: JSON.stringify(\{ token_id: token_id \})\
    \})\
    .then(response => response.json())\
    .then(data => \{\
        document.getElementById("brandName").textContent = data.known_issuer_name || "Unknown";\
    \})\
    .catch(error => \{\
        console.error("Error verifying token:", error);\
    \});\
\}\
\
const token_id = getTokenDetailsFromWebpage();\
verifyTokenWithAPI(token_id);\
}