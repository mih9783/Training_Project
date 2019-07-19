let names = "Ирина",
    age = 43,
    mail = "ex.@mail.ru";

    document.write("Пользователю " + names + " " + age + " года. Её почтовый адрес: " + mail + "<br><br>");

    // интерполяция
    document.write(`Пользователю  ${names}  ${age}  года. Её почтовый адрес: ${mail}`);
