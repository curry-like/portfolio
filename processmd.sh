processmd "contents/**/*.{yml,md}" --stdout --preview 100 --outputDir contents/json_temp > contents/summary_temp.json
cp -r contents/json_temp contents/json
rm -rf contents/json_temp
mv -f contents/summary_temp.json contents/summary.json
