fs.readFile("massage.txt", "Utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});