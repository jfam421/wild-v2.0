import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";



export default function useItems(){

  const {language, setLanguage} = useContext(LanguageContext);

  // const map = new Map();
  // fetch('http://localhost:8000/api/')
  //  .then(response => response.json())
  //  .then(json => map = new Map(Object.entries(JSON.parse(json))))

  
  const itemsEng = {
    language: 1,

    drinks: [{name: "Non-Alcoholic", items:[
    {itemName: "Coca-Cola", imageURL: "https://bit.ly/3zJ0ami", description: "0.75ml bottle", price: 15},
    {itemName: "Juice", imageURL: "https://prigat.co.il/wp-content/themes/prigat2020/img/logo.png", description: "", price: 10},
    {itemName: "Cocktail", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F156561%2Fisolated%2Fpreview%2Feb07eab6dafdc48777077575f1c4bb79-bloody-mary-cocktail-icon-by-vexels.png&f=1&nofb=1", description: "Ask bartender", price: 20}]},
    {name: "Beer", items: [
    {itemName: "Budweiser", imageURL: "https://bit.ly/3vVtxkq", description: "Medium-bodied, flavorful, crisp American-style lager. 5%", price: "15/20"},
    {itemName: "Edelweiss", imageURL: "https://www.edelweissbeer.com/frontend/assets/images/edelweiss-logo.svg", description: "This particularly smooth beer is brewed with all natural ingredients with a touch of mountain herbs and spices. 4,8%", price: "15/20"},
    {itemName: "Barbãr Blonde", imageURL: "https://bit.ly/3AgpSjH", description: "Honey is added to the malted wheat and hops, giving it a sweeter and richer taste. 8%", price: "20/25"},
    {itemName: "Kasteel Rogue", imageURL: "https://bit.ly/3BZl834", description: "Dark red beer with sour cherries. 8%", price: "20/25"},
    {itemName: "Trippel", imageURL: "", description: "White bread, biscuit, spice, honey, lemon zest, little bit of caramel, and a certain unique herbal character. 11%eu", price: "20/25"},
    {itemName: "Kozel Dark", imageURL: "https://www.kozelbeer.com/images/logo-big-white.png", description: "Smooth beer with caramel taste created by four different malts. 3,8%", price: "20/25"},
    {itemName: "Liefmans", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bierlinie-berlin.de%2Fimages%2Fstories%2Fflexicontent%2Fm_liefmans_fruitesse_on_the_rocks_brauerei_logo.jpg&f=1&nofb=1", description: "Fresh, intense flavour of strawberries, raspberries, black cherries, elderberries and blueberries", price: "20/25"},
    {itemName: "Shevet", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmark.trademarkia.com%2Flogo-images%2Fpromised-land-spirits-ltd%2Fest-2016-shevet-87570910.jpg&f=1&nofb=1", description: "", price: "20/25"}]},
    {name: "Vodka", items:[
    {itemName: "Van Gogh", imageURL: "https://www.vangoghvodka.com/wp-content/uploads/logo.png", description: "Unflavored and flavored vodka", price: 10},
    {itemName: "Stolichnaya", imageURL: "https://stoli.com/wp-content/uploads/2022/08/stolo_white_logo.svg", description: "Vodka made of wheat and rye grain", price: 10}]},
  {name: "Whiskey", items: [
    {itemName: "Jack Daniel's", imageURL: "https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png" , description: "", price: "15"},
    {itemName: "Bushmills", imageURL: "https://www.bushmills.eu/wp-content/themes/bushmills/dist/images/logo.png", description: "", price: 10},
    {itemName: "Grant's", imageURL: "https://i.postimg.cc/k46hrr6q/grants.png", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "https://i.postimg.cc/V6xZm7nM/dalmore.png", description: "", price: 25}]},
  
  {name: "Tequila", items: [
    {itemName: "Jose Cuervo", imageURL: "https://i.postimg.cc/W4fffp45/jose-cuervo.png", description: "This legendary, handcrafted tequila has been made from Blue Agaves harvested at the peak of their maturity and baked in stone and clay ovens.", price: 10}]},
  {name: "Gin", items: [
    {itemName: "Gordon's", imageURL: "https://www.gordonsgin.com/assets/images/logo/navigation_logo.png", description: "", price: 10},
    {itemName: "Bombay", imageURL: "https://d1y79tpeaemgj5.cloudfront.net/wp-content/uploads/2019/12/17155501/BS_Primary_Signature_White_RGB.png", description: "From the heat of cubeb berries from Java to the spice of West African Grains of Paradise, every one of ten precious botanicals are chosen to bring their own special something to gin", price: 10}]},
  {name: "Liquor", items: [
    {itemName: "Jägermeister", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FJagermeister-Logo.png&f=1&nofb=1", description: "Mint, lots of herbs, camphor, and a whole series of fragrances that collide and chase each other.", price: 10},
    {itemName: "Tubi 60", imageURL: "https://i.postimg.cc/RhwsFcLY/tubi60.png", description: "", price: 10}]},
  {name: "Arak", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
  {name: "Rum", items: [
    {itemName: "Bacardi", imageURL: "https://i.postimg.cc/0QqNTvrq/bakardi.png", description: "", price: 10},
    {itemName: "Captain Morgan", imageURL: "https://i.postimg.cc/J7XdPLCQ/captain-Morgan.png", description: "", price: 10}]},
  {name: "Absinthe", items: [
    {itemName: "Xenta", imageURL: "https://xenta.com/wp-content/uploads/2019/04/cropped-logo-1-1.png", description: "Provides for the long and careful mixing of 10 herbs and spices, predominantly of Alpine origin, into exceptional quality alcohol.", price: 25}]}],

food: [{name: "HotDog", items:[
        "25₪",
        "Extras:",
        "",
        'hotDog',
        {itemName: "Cabbage in mahonnaise"},
        {itemName: "Red cabbage in mahonnaise"},
        {itemName: "Pickles"},
        {itemName: "BBQ, mayonnnaise, ketchup"}]},
      {name: "Fries", items:[
        "15₪",
        "Extras:",
        "",
        'fries',
        {itemName: "Parmesan +5₪"},
        {itemName: "Schnitzels +20₪"}, 
        {itemName: "BBQ, mayonnnaise, ketchup"}]},
      {name: "Schnitzel", items:[
        "30₪",
        "Extras:",
        "",
        'schnitzel',
        {itemName: "Bun +5₪"},
        {itemName: "Cabbage in mahonnaise"},
        {itemName: "Red cabbage in mahonnaise"},
        {itemName: "Pickles"},
        {itemName: "BBQ, mayonnnaise, ketchup"}]},
      {name: "Salad", items:[
        "20₪",
        "Extras:",
        "Lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce",
        'salad',
        {itemName: "Feta cheese +5₪"},
        {itemName: "Chicken +5₪"}
        ]}],

    hookah: [{name: "Light", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "Green tea, chamomile and ripe mango", price: ""},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", description: "Lemon wafers with delicate vanilla cream filling", price: ""},
    {itemName: "Pink Jam", imageURL: "", description: "Bright citrus notes of pink grapefruit, accentuated by ripe strawberries and raspberry jam", price: ""},
    {itemName: "Grape Britain", imageURL: "", description: "Grape with a touch of freshness", price: ""},
    {itemName: "Watermelody", imageURL: "", description: "Watermelon and melon with freshness", price: ""},
    {itemName: "Blueberry Mint", imageURL: "", description: "Blueberries combined with delicate mint", price: ""},
    {itemName: "Forest Berry", imageURL: "", description: "A blend of red raspberries, blackberries and strawberries", price: ""},
    {itemName: "Fruit Ninja", imageURL: "", description: "Pineapple dominates a wide range of fruits such as kii, peach, passion fruit and many more", price: ""},
    {itemName: "Citrus Boom", imageURL: "", description: "Grapefruit and Sweet Pomelo", price: ""},
    {itemName: "Berrytale", imageURL: "", description: "Wild Berries", price: ""},
    {itemName: "Thai Mango", imageURL: "", description: "Sweet tasty mango with grassy undertones", price: ""},
    {itemName: "Amazingreen", imageURL: "", description: "Green berries with a slight coolness", price: ""}]},
    {name: "Medium", items:[
    {itemName: "Pinkman", imageURL: "", description: "Sweet and sour combination of pink grapefruit and strawberry flavored with raspberry syrup", price: ""},
    {itemName: "Pineapple Rings", imageURL: "", description: "Juicy Pineapple", price: ""},
    {itemName: "Tropic Juice", imageURL: "", description: "An unusually rich blend of pineapple and exotic passion fruit flavors", price: ""},
    {itemName: "Orange Team", imageURL: "", description: "Sweet and sour combination of orange and tangerine", price: ""},
    {itemName: "Ice Cream", imageURL: "", description: "Vanilla Ice Cream", price: ""}]},
    {name: "Heavy", items:[
    {itemName: "Red Orange", imageURL: "", description: "Intense orange combined with sour and sweet notes", price: ""},
    {itemName: "Chupa Graper", imageURL: "", description: "Grape Chupa-Chups", price: ""},
    {itemName: "Apple shock", imageURL: "", description: "Refreshing Ripe Green Apple with Great Acid", price: ""},
    {itemName: "Ice Baby", imageURL: "", description: "Refreshing Berry Sorbet with Citrus Aftertaste", price: ""},
    {itemName: "Brownie", imageURL: "", description: "Delicate Chocolate Cookie", price: ""}]}],

    menu: ["Drink", "Food", "Hookah"]

  };
   const itemsRus = {
    language: 0,
    drinks: [{name: "Без алкоголя", items:[
    {itemName: "Coca-Cola", imageURL: "https://bit.ly/3zJ0ami", description: "Бутылка 0.75мл", price: 15},
    {itemName: "Сок", imageURL: "https://prigat.co.il/wp-content/themes/prigat2020/img/logo.png", description: "", price: 10},
    {itemName: "Коктейли", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F156561%2Fisolated%2Fpreview%2Feb07eab6dafdc48777077575f1c4bb79-bloody-mary-cocktail-icon-by-vexels.png&f=1&nofb=1", description: "В ассортименте у бармена", price: 20}]},
    {name: "Пиво", items: [
    {itemName: "Budweiser", imageURL: "https://bit.ly/3vVtxkq", description: "Ароматный, свежий лагер средней крепости в американском стиле. 5%", price: "15/20"},
    {itemName: "Edelweiss", imageURL: "https://www.edelweissbeer.com/frontend/assets/images/edelweiss-logo.svg", description: "Это особенно мягкое пиво сварено из натуральных ингредиентов с оттенком горных трав и специй. 4,8%", price: "15/20"},
    {itemName: "Barbãr Blonde", imageURL: "https://bit.ly/3AgpSjH", description: "К соложеной пшенице и хмелю добавляют мед, что придает пиву более сладкий и насыщенный вкус. 8%", price: "20/25"},
    {itemName: "Kasteel Rogue", imageURL: "https://bit.ly/3BZl834", description: "Темно-красное пиво с кислой вишней. 8%", price: "20/25"},
    {itemName: "Trippel", imageURL: "", description: "Белый хлеб, бисквит, специи, мед, лимонная цедра, немного карамели и неповторимый травяной характер. 11%eu", price: "20/25"},
    {itemName: "Kozel Dark", imageURL: "https://www.kozelbeer.com/images/logo-big-white.png", description: "Мягкое пиво с карамельным вкусом, созданное четырьмя разными сортами солода. 3,8%", price: "20/25"},
    {itemName: "Liefmans", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bierlinie-berlin.de%2Fimages%2Fstories%2Fflexicontent%2Fm_liefmans_fruitesse_on_the_rocks_brauerei_logo.jpg&f=1&nofb=1", description: "Свежий, интенсивный вкус клубники, малины, черешни, бузины и черники", price: "20/25"},
    {itemName: "Shevet", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmark.trademarkia.com%2Flogo-images%2Fpromised-land-spirits-ltd%2Fest-2016-shevet-87570910.jpg&f=1&nofb=1", description: "Пиво израильского производства в богатом вкусовом сегменте", price: "20/25"}]},
    {name: "Водка", items:[
    {itemName: "Van Gogh", imageURL: "https://www.vangoghvodka.com/wp-content/uploads/logo.png", description: "Классическая водка со вкусами и без.", price: 10},
    {itemName: "Stolichnaya", imageURL: "https://stoli.com/wp-content/uploads/2022/08/stolo_white_logo.svg", description: "Водка из пшеницы и ржи.", price: 10}]},
  {name: "Виски", items: [
    {itemName: "Jack Daniel's", imageURL: "https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png" , description: "", price: "15"},
    {itemName: "Bushmills", imageURL: "https://www.bushmills.eu/wp-content/themes/bushmills/dist/images/logo.png", description: "", price: 10},
    {itemName: "Grant's", imageURL: "https://i.postimg.cc/k46hrr6q/grants.png", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "https://i.postimg.cc/V6xZm7nM/dalmore.png", description: "", price: 25}]},
  
  {name: "Текила", items: [
    {itemName: "Jose Cuervo", imageURL: "https://i.postimg.cc/W4fffp45/jose-cuervo.png", description: "Эта легендарная текила ручной работы изготовлена из голубой агавы, собранной на пике ее зрелости и запеченной в каменных и глиняных печах.", price: 10}]},
  {name: "Джин", items: [
    {itemName: "Gordon's", imageURL: "https://www.gordonsgin.com/assets/images/logo/navigation_logo.png", description: "", price: 10},
    {itemName: "Bombay", imageURL: "https://d1y79tpeaemgj5.cloudfront.net/wp-content/uploads/2019/12/17155501/BS_Primary_Signature_White_RGB.png", description: "Вкус джина рождается в сочетании жгучих ягод кубеба, западноафриканских райских пряностей и с десятью видов трав", price: 10}]},
  {name: "Ликеры", items: [
    {itemName: "Jägermeister", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FJagermeister-Logo.png&f=1&nofb=1", description: "Мята, множество трав, камфора и целый ряд ароматов, которые сталкиваются и дополняют друг друга.", price: 10},
    {itemName: "Tubi 60", imageURL: "https://i.postimg.cc/RhwsFcLY/tubi60.png", description: "", price: 10}]},
  {name: "Анис", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10},
    {itemName: "Xenta", imageURL: "https://xenta.com/wp-content/uploads/2019/04/cropped-logo-1-1.png", description: "Спирт исключительного качества длительно и тщательно смешанный с 10 травами и специями альпийского происхождения", price: 25}]},
  {name: "Ром", items: [
    {itemName: "Bacardi", imageURL: "https://i.postimg.cc/0QqNTvrq/bakardi.png", description: "", price: 10},
    {itemName: "Captain Morgan", imageURL: "https://i.postimg.cc/J7XdPLCQ/captain-Morgan.png", description: "", price: 10}]}],

    food: [{name: "ХотДог", items:[
        "25₪",
        "Добавки:",
        "",
        'hotDog',
        {itemName: "Капуста в майонезе"},
        {itemName: "Красая капуста в майонезе"},
        {itemName: "Соленые огурцы"},
        {itemName: "BBQ, майонез, кетчуп"}]},
      {name: "Картошка Фри", items:[
        "15₪",
        "Добавки:",
        "",
        'fries',
        {itemName: "Пармезан +5₪"},
        {itemName: "Шницели +20₪"}, 
        {itemName: "BBQ, майонез, кетчуп"}]},
      {name: "Шницели", items:[
        "30₪",
        "Добавки:",
        "",
        'schnitzel',
        {itemName: "Булочка +5₪"},
        {itemName: "Капуста в майонезе"},
        {itemName: "Красная капуста в майонезе"},
        {itemName: "Соленые огурцы"},
        {itemName: "BBQ, майонез, кетчуп"}]},
      {name: "Салат", items:[
        "20₪",
        "Добавки:",
        "Листья салата, помидоры черри, огурцы, красный лук, оливки, соус",
        'salad',
        {itemName: "Сыр Фета +5₪"},
        {itemName: "Курица +5₪"}
        ]}],

    hookah: [{name: "Легкий", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "Зеленый чай, ромашка и спелое манго", price: ""},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", 
    description: "Лимонные вафли с нежной начинкой из ванильного крема", price: ""},
    {itemName: "Pink Jam", imageURL: "", 
    description: "Яркие цитрусовые ноты розового грейпфрута, подчеркнутые ароматом спелой клубники и малинового джема", price: ""},
    {itemName: "Grape Britain", description: "Виноград с нотками свежести", imageURL: "", price: ""},
    {itemName: "Watermelody", description: "Арбуз и дыня со свежестью", imageURL: "", price: ""},
    {itemName: "Blueberry Mint", description: "Черника в сочетании с нежной мятой", imageURL: "", price: ""},
    {itemName: "Forest Berry", description: "Смесь ягод из сочетания ароматов красной малины, ежевики и клубники", imageURL: "", price: ""},
    {itemName: "Fruit Ninja", description: "Ананас доминирует широкий спектр фруктов, таких как кийи, персик, маракуя и множество других", imageURL: "", price: ""},
    {itemName: "Citrus Boom", description: "Грейпфрут и сладкое помело", imageURL: "", price: ""},
    {itemName: "Berrytale", description: "Лесные ягоды", imageURL: "", price: ""},
    {itemName: "Thai Mango", description: "Сладкий вкусный манго с травянистым оттенком", imageURL: "", price: ""},
    {itemName: "Amazingreen", description: "Зеленые ягоды с легкой прохладой", imageURL: "", price: ""}]},
    {name: "Средний", items:[
    {itemName: "Pinkman", description: "Кисло-сладкое сочетание розового грейпфрута и клубники, приправленное малиновым сиропом", imageURL: "", price: ""},
    {itemName: "Pineapple Rings", description: "Сочный ананас", imageURL: "", price: ""},
    {itemName: "Tropic Juice", description: "Необычайно богатая смесь ароматов ананаса и экзотической маракуйи", imageURL: "", price: ""},
    {itemName: "Orange Team", description: "Кисло-сладкое сочетание апельсина и мандарина", imageURL: "", price: ""},
    {itemName: "Ice Cream", description: "Ванильное мороженое", imageURL: "", price: ""}]},
    {name: "Крепкий", items:[
    {itemName: "Red Orange", imageURL: "", description: "Насыщенный апельсин в сочетании с кислыми и сладкими нотами", price: ""},
    {itemName: "Chupa Graper", imageURL: "", description: "Виноградный Чупа-Чупс", price: ""},
    {itemName: "Apple shock", imageURL: "", description: "Освежающее спелое зеленое яблоко с великолепной кислотой", price: ""},
    {itemName: "Ice Baby", imageURL: "", description: "Освежающий ягодный сорбет с цитрусовым послевкусием", price: ""},
    {itemName: "Brownie", imageURL: "", description: "Нежное шоколадное печенье", price: ""}]}],

    menu: ["Напитки", "Еда", "Кальян"]
  };
   const itemsHeb = {
    language: 2,
    drinks: [{name: "לא אלכוהולי", items:[
    {itemName: "Coca-Cola", imageURL: "https://bit.ly/3zJ0ami", description: "בקבוק 0.75 מ'ל", price: 15},
    {itemName: "Juice", imageURL: "https://prigat.co.il/wp-content/themes/prigat2020/img/logo.png", description: "", price: 10},
    {itemName: "Cocktail", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F156561%2Fisolated%2Fpreview%2Feb07eab6dafdc48777077575f1c4bb79-bloody-mary-cocktail-icon-by-vexels.png&f=1&nofb=1", description: "תשאלו את הברמן", price: 20}]},
    {name: "בירה", items: [
    {itemName: "Budweiser", imageURL: "https://bit.ly/3vVtxkq", description: "בעל גוף בינוני, טעים, לאגר פריך בסגנון אמריקאי. 5%", price: "15/20"},
    {itemName: "Edelweiss", imageURL: "https://www.edelweissbeer.com/frontend/assets/images/edelweiss-logo.svg", description: "בירה חלקה במיוחד זו מבושלת עם כל המרכיבים הטבעיים עם מגע של עשבי תיבול ותבלינים הרים. 4.8%", price: "15/20"},
    {itemName: "Barbãr Blonde", imageURL: "https://bit.ly/3AgpSjH", description: "לחיטה הכשות והכשות מוסיפים דבש ומעניקים לה טעם מתוק ועשיר יותר. 8%", price: "20/25"},
    {itemName: "Kasteel Rogue", imageURL: "https://bit.ly/3BZl834", description: "בירה אדומה כהה עם דובדבנים חמוצים. 8%", price: "20/25"},
    {itemName: "Trippel", imageURL: "", description: "לחם לבן, ביסקוויט, תבלינים, דבש, גרידת לימון, מעט קרמל ואופי צמחים ייחודי. 11%", price: "20/25"},
    {itemName: "Kozel Dark", imageURL: "https://www.kozelbeer.com/images/logo-big-white.png", description: "בירה חלקה עם טעם קרמל שנוצר על ידי ארבעה מאלטים שונים. 3.8%", price: "20/25"},
    {itemName: "Liefmans", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bierlinie-berlin.de%2Fimages%2Fstories%2Fflexicontent%2Fm_liefmans_fruitesse_on_the_rocks_brauerei_logo.jpg&f=1&nofb=1", description: "טעם טרי ועז של תותים, פטל, דובדבנים שחורים, סמבוק ואוכמניות", price: "20/25"},
    {itemName: "Shevet", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmark.trademarkia.com%2Flogo-images%2Fpromised-land-spirits-ltd%2Fest-2016-shevet-87570910.jpg&f=1&nofb=1", description: "", price: "20/25"}]},
    {name: "וודקה", items:[
    {itemName: "Van Gogh", imageURL: "https://www.vangoghvodka.com/wp-content/uploads/logo.png", description: "וודקה ללא טעם וודקה בטעמים", price: 10},
    {itemName: "Stolichnaya", imageURL: "https://stoli.com/wp-content/uploads/2022/08/stolo_white_logo.svg", description: "וודקה עשויה חיטה ושיפון", price: 10}]},
  {name: "וויסקי", items: [
    {itemName: "Jack Daniel's", imageURL: "https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png" , description: "", price: "15"},
    {itemName: "Bushmills", imageURL: "https://www.bushmills.eu/wp-content/themes/bushmills/dist/images/logo.png", description: "", price: 10},
    {itemName: "Grant's", imageURL: "https://i.postimg.cc/k46hrr6q/grants.png", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "https://i.postimg.cc/V6xZm7nM/dalmore.png", description: "", price: 25}]},
  
  {name: "טקילה", items: [
    {itemName: "Jose Cuervo", imageURL: "https://i.postimg.cc/W4fffp45/jose-cuervo.png", description: "הטקילה האגדית, בעבודת יד, עשויה מאגבות כחולות שנקטפו בשיא בשלותן ונאפו בתנור אבן וחמר.", price: 10}]},
  {name: "ג'ין", items: [
    {itemName: "Gordon's", imageURL: "https://www.gordonsgin.com/assets/images/logo/navigation_logo.png", description: "", price: 10},
    {itemName: "Bombay", imageURL: "https://d1y79tpeaemgj5.cloudfront.net/wp-content/uploads/2019/12/17155501/BS_Primary_Signature_White_RGB.png", description: "מהחום של גרגרי קוביות מג'אווה ועד לתבלין של גרגירי גן עדן במערב אפריקה, כל אחד מעשרת הצמחים הבוטניים היקרים נבחר להביא משהו מיוחד משלו לג'ין", price: 10}]},
  {name: "מַשׁקֶה חָרִיף", items: [
    {itemName: "Jägermeister", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FJagermeister-Logo.png&f=1&nofb=1", description: "מנטה, הרבה עשבי תיבול, קמפור, וסדרה שלמה של ניחוחות שמתנגשים ורודפים זה את זה.", price: 10},
    {itemName: "Tubi 60", imageURL: "https://i.postimg.cc/RhwsFcLY/tubi60.png", description: "", price: 10}]},
  {name: "ערק", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
  {name: "רום", items: [
    {itemName: "Bacardi", imageURL: "https://i.postimg.cc/0QqNTvrq/bakardi.png", description: "", price: 10},
    {itemName: "Captain Morgan", imageURL: "https://i.postimg.cc/J7XdPLCQ/captain-Morgan.png", description: "", price: 10}]},
  {name: "אַבְּסִינְתְ", items: [
    {itemName: "Xenta", imageURL: "https://xenta.com/wp-content/uploads/2019/04/cropped-logo-1-1.png", description: "מספק ערבוב ארוך וקפדני של 10 עשבי תיבול ותבלינים, בעיקר ממוצא אלפיני, לאלכוהול באיכות יוצאת דופן.", price: 25}]}],

    food: [{name: "נקניקיה", items:[
        "25₪",
        "תוספות:",
        "",
        'hotDog',
        {itemName: "כרוב במחונז"},
        {itemName: "כרוב אדום במחונז"},
        {itemName: "חמוצים"},
        {itemName: "רוטב ברביקיו, מיונז, קטשוף"}]},
      {name: "צ'יפס", items:[
        "15₪",
        "תוספות:",
        "",
        'fries',
        {itemName: "פרמזן +5₪"},
        {itemName: "שניצלים +20₪"}, 
        {itemName:"רוטב ברביקיו, מיונז, קטשוף"}]},
      {name: "שניצל", items:[
        "30₪",
        "תוספות:",
        "",
        'schnitzel',
        {itemName: "לחמניה +5₪"},
        {itemName: "כרוב במחונז"},
        {itemName: "כרוב אדום במחונז"},
        {itemName: "חמוצים"},
        {itemName: "רוטב ברביקיו, מיונז, קטשוף"}]},
      {name: "סלט", items:[
        "20₪",
        "תוספות:",
        "חסה, עגבניות שרי, מלפפונים, בצל אדום, זיתים, רוטב",
        'salad',
        {itemName: "גבינת פטה +5₪"},
        {itemName: "עוף +5₪"}
        ]}],

    hookah: [{name: "קל", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "תה ירוק, קמומיל ומנגו בשל", price: ""},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", description: "וופלים לימון עם מילוי קרם ונילעדין", price: ""},
    {itemName: "Pink Jam", imageURL: "", description: "נגיעות הדרים חזקות של אשכולית ורודה, מודגשות על ידי ניחוח של תותים בשביל וריבת פטל", price: ""},
    {itemName: "Grape Britain", imageURL: "", description: "ענבים עם נגיעת של רעננות", price: ""},
    {itemName: "Watermelody", imageURL: "", description: "אבטיח ומלון מרעננים", price: ""},
    {itemName: "Blueberry Mint", imageURL: "", description: "אוכמניות בשילוב עם נענע עדינה", price: ""},
    {itemName: "Forest Berry", imageURL: "", description: "תערובת של פירות יער עם שילוב של טעמים של פטל אדום, פטל שחור ותותים", price: ""},
    {itemName: "Fruit Ninja", imageURL: "", description: "אננס נשלט על ידי מגוון רחב של פירות, כגון קיווי, אפרסק, פסיפלורה ועוד רבים אחרים", price: ""},
    {itemName: "Citrus Boom", imageURL: "", description: "אשכולית ופומלה מתוקה", price: ""},
    {itemName: "Berrytale", imageURL: "", description: "פירות יער", price: ""},
    {itemName: "Thai Mango", imageURL: "", description: "מנגו מתוק וטעים עם נגיעות של עשבים", price: ""},
    {itemName: "Amazingreen", imageURL: "", description: "פירות יער ירוקים, קצת קרירים", price: ""}]},
    {name: "בינוני", items:[
    {itemName: "Pinkman", imageURL: "", description: "שילוב מתוק וחמוץ של אשכוליות ורודות ותותים מתובלים בסירוף פטל", price: ""},
    {itemName: "Pineapple Rings", imageURL: "", description: "אננס עסיסי", price: ""},
    {itemName: "Tropic Juice", imageURL: "", description: "תערובת עשירה במיוחד של ניחוחות אננס ופסיפלורה אקזוטית בשלה", price: ""},
    {itemName: "Orange Team", imageURL: "", description: "שילוב מתוק וחמוץ של תפוז ומנדרינה", price: ""},
    {itemName: "Ice Cream", imageURL: "", description: "גלידת וניל", price: ""}]},
    {name: "כבד", items:[
    {itemName: "Red Orange", imageURL: "", description: "עשיר, ריחני-הדר באותו זמן חמוץ ומתוק", price: ""},
    {itemName: "Chupa Graper", imageURL: "", description: "סיכריה על מקל בטעם ענבים", price: ""},
    {itemName: "Apple shock", imageURL: "", description: "תפוחים ירוקים בשלים-מרעננים וחמוצים", price: ""},
    {itemName: "Ice Baby", imageURL: "", description: "סורבה ברי מרענן בטעם לוואי הדרים", price: ""},
    {itemName: "Brownie", imageURL: "", description: "עוגיות שוקולד רכות", price: ""}]}],

    menu: ["שתייה", "אוכל", "נרגילה"]
  };

  switch (language){
    case 0:
      return itemsRus
      console.log("drink rus")
      break;
      case 2: 
      return itemsHeb
      console.log("drink heb")
      break;
      default:
      return itemsEng;
      console.log("drink eng+def")
      break;
  }

  // return drinkList;
}
