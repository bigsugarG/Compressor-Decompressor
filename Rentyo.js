
function getData(btnNo){　//文字列の受け取りと配列化
    var inputData = document.getElementById("input_data").value;
    if(!inputData){
        alert("Please input string data.");
    }else{
        var charData = inputData.split("");
        if(btnNo==1){ doCompress(charData); }
        else if (btnNo==2){ doDecompress(charData); }
    }
}

function doCompress(charData){　//連長圧縮
    var compressedText=[];
    var contiCounter = 0;
    var nonContiText=[];
    var nonContiCounter = 0;
    var currentChar = charData[0];

    for(i=0;i<charData.length;i++){
        if(currentChar==charData[i]){
            if(nonContiCounter>0){　//XYYの最後のY部分に当たる出力処理
                minusNumber = nonContiCounter * (-1);
                compressedText.push(minusNumber);
                for(j=0;j<nonContiText.length;j++){
                    compressedText.push(nonContiText[j]);
                }
                nonContiText = [];
                nonContiCounter = 0;
            }
            contiCounter++;
        }else{
            if(contiCounter>1){　//XXYの最後のYの部分に当たる出力処理
                compressedText.push(contiCounter,currentChar);
            }
            if(contiCounter==1){
                nonContiCounter++;
                nonContiText.push(currentChar);
            }
            contiCounter = 1;
            currentChar = charData[i];
        }
    }

    if(contiCounter>1){
        compressedText.push(contiCounter,currentChar);　//XXXのように末尾が連続だった場合の出力処理
    
    }else{　//XYZのように末尾が不連続だった場合の出力処理
        nonContiCounter++;
        minusNumber = nonContiCounter * (-1);
        nonContiText.push(currentChar);
        compressedText.push(minusNumber);
        for(k=0;k<nonContiText.length;k++){
            compressedText.push(nonContiText[k]);
        }
    }

    var resultText = compressedText.join("");　//配列を文字列に変換
    document.getElementById("show_result").textContent = "Compressed Result: " + resultText;

}

function doDecompress(charData){　//連長圧縮に対する復号処理
    var decompressedText = [];
    var minusFlag = false;　//現在の状態を決める
    var countStock = 0;　//1文字の数字
    var preNumStock = [];　//数字のストック（1文字ずつ読み込むので、2桁以上に対応するために用意）

    for(i=0;i<charData.length;i++){
        if(charData[i]=="-"){　//マイナスの符号を検知
            minusFlag = true;
        }
        else if(charData[i].match(/[a-z]/gi)){　//アルファベットを検知
            if(minusFlag==true){　//負の状態
                decompressedText.push(charData[i]);
                countStock -= 1;
                if(countStock==0){minusFlag = false;}
                preNumStock = [];
            }else{　//正の状態
                var trialNum = parseInt(preNumStock.join(""));
                for(j=0;j<trialNum;j++){
                    decompressedText.push(charData[i]);
                }
                preNumStock = [];
                countStock = 0;
            }
        }else{　//数字
                countStock = parseInt(charData[i]);
                preNumStock.push(countStock);
        }
    }    
    var resultText = decompressedText.join("");　//配列を文字列に変換
    document.getElementById("show_result").textContent = "Decompressed Result: " + resultText;
}

