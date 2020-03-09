
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>Compress&Decompress</title>
    <link rel="stylesheet" type="text/css" href="Rentyo.css">
    <script type = "text/javascript" src = "Rentyo.js"></script>
</head>

<body>
    <h3 id = "title">Compress & Decompress</h3>
    <p>Input text data on below form.</p>
    <div id = "warning">
        <p>※If you compress text data, any is OK.</p>
        <p>But if you decompress text data, you have to obey the below rules.</p>
        <a href = "https://ja.wikipedia.org/wiki/%E9%80%A3%E9%95%B7%E5%9C%A7%E7%B8%AE" target="_blank">Rules</a>
    </div>
    <p></p>
    <input id = "input_data" type="text" placeholder = "Let's input appropriate text!">

    <button id = "comp_button" onclick = "getData(1)">COMP</button>
    <button id = "decomp_button" onclick = "getData(2)">DECOMP</button>

    <p id = "show_result">Result is showing here.</p>
</body>
