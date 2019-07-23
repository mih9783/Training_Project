let options = {
    width: 1366,
    height: 768,
    background: "red",
    font: {
        size: "16px",
        colr: "#fff"
    }
};

// метод stringify()
console.log(JSON.stringify(options));

// parse()
console.log(JSON.parse(JSON.stringify(options)));