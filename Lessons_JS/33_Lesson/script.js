let video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "bloger"],
    internet = [video, blogs, "vk", "facebook"];

    console.log(internet);

// ES6 Spread операторы

let video1 = ["youtube", "vimeo", "rutube"],
    blogs1 = ["wordpress", "livejournal", "bloger"],
    internet1 = [...video1, ...blogs1, "vk", "facebook"];

    console.log(internet1);

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a + b + c);
    }

    let num = [5, 9, 15];
log(num);
log(...num);