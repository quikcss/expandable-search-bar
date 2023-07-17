<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="search-btn">
        <div class="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="input">
            <input type="text" placeholder="Search..." id="search">
            <span class="clear">
                <i class="fa-solid fa-xmark" onclick="document.getElementById('search').value = ' '"></i>
            </span>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/3701cb64b7.js" crossorigin="anonymous"></script>
    <script>
        let search = document.querySelector(".search-btn")
        let btn = document.querySelector(".fa-magnifying-glass")
        btn.addEventListener("click", ()=>{
            search.classList.toggle("active")
        })
    </script>
</body>
</html>
