# Compressor & Decompressor
This is an algorithm to compress or decompress text data.
HTML file shows simple I/O page.

# 連長圧縮アルゴリズム
圧縮と復号を行うプログラムです。
HTML File にて簡単に結果を試すことが出来ます。

連長圧縮のルールは大まかには<a href = "https://ja.wikipedia.org/wiki/%E9%80%A3%E9%95%B7%E5%9C%A7%E7%B8%AE">Wikipedia</a>を参照。

今回は文字の個数は前に記述しています。
（例） 圧縮　AABBBCDE　→　2A3B-3CDE 
　　　 複合　-2AB3C-1D　→　ABCCCD
