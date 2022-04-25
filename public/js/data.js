const DATA = `
{
    "lastUpdate": "1650887331000",
    "r61": {
        "oldAreaName": "Амур-Нижньодніпровський",
        "newAreaName": "Амур-Нижньодніпровський",
        "objects": [
            {
                "type": "street",
                "oldName": "Баглія",
                "newName": "Брацлавська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%86%D0%BB%D0%B0%D0%B2",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Білостоцького",
                "newName": "Любарського",
                "link": {
                    "href": "http://www.fairyroom.ru/?page_id=28951",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Білостоцького",
                "newName": "Любарського",
                "link": {
                    "href": "http://www.fairyroom.ru/?page_id=28951",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Варейкіса",
                "newName": "Джузеппе Гарібальді",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%B6%D1%83%D0%B7%D0%B5%D0%BF%D0%BF%D0%B5_%D0%93%D0%B0%D1%80%D1%96%D0%B1%D0%B0%D0%BB%D1%8C%D0%B4%D1%96",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Воровського",
                "newName": "Дмитра Багалія",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D0%B3%D0%B0%D0%BB%D1%96%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "avenue",
                "oldName": "Воронцова",
                "newName": "Мануйлівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%83%D0%B9%D0%BB%D1%96%D0%B2%D0%BA%D0%B0_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "area",
                "oldName": "Воронцовський",
                "newName": "Мануйлівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%83%D0%B9%D0%BB%D1%96%D0%B2%D0%BA%D0%B0_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Галана",
                "newName": "Празької весни",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B7%D1%8C%D0%BA%D0%B0_%D0%B2%D0%B5%D1%81%D0%BD%D0%B0",
                    "type": 1
                }
            },
            {
                "type": "street",
                "oldName": "Галковського",
                "newName": "Сарматська"
            },
            {
                "type": "street",
                "oldName": "Гайдара",
                "newName": "Дмитра Марковича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%B8%D1%87_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Героїв Громадянської війни",
                "newName": "Марії Лисиченко",
                "link": {
                    "href": "http://www.day.kiev.ua/uk/article/ukrayina-incognita/shirochin-dnipra-poshiryuie-dushu",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Годовикова",
                "newName": "Братиславська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Гудкова",
                "newName": "Яна Гуса",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%BD_%D0%93%D1%83%D1%81",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Енгельса",
                "newName": "Афанасьєва-Чужбинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%8C%D1%94%D0%B2-%D0%A7%D1%83%D0%B6%D0%B1%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Желваківського",
                "newName": "Полонської-Василенко",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BE%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D1%8F_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Замполіта Бєляєва",
                "newName": "Бєляєва",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%94%D0%BB%D1%8F%D1%94%D0%B2_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Захаренка",
                "newName": "Глухівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%BB%D1%83%D1%85%D1%96%D0%B2",
                    "type": 2
                }
            },
            {
                "type": "avenue",
                "oldName": "ім. газети 'Правда'",
                "newName": "Слобожанський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B1%D0%BE%D0%B6%D0%B0%D0%BD%D1%89%D0%B8%D0%BD%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Івана Зінукова",
                "newName": "Портова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D1%96%D1%87%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D0%BE%D1%80%D1%82",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Івана Зінукова",
                "newName": "Портовий",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D1%96%D1%87%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D0%BE%D1%80%D1%82",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Іскри",
                "newName": "Піскова",
                "restored": true
            },
            {
                "type": "lake",
                "oldName": "ім. Кірова",
                "newName": "Затишна"
            },
            {
                "type": "park",
                "oldName": "ім. Кірова",
                "newName": "Козацької Слави - Кирилівка",
                "restored": false
            },
            {
                "type": "street",
                "oldName": "Кіровоградська",
                "newName": "Інгульска",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%BD%D0%B3%D1%83%D0%BB",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Кіровоградський",
                "newName": "Інгульский",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%BD%D0%B3%D1%83%D0%BB",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Клочка",
                "newName": "Данила Заболотного",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D0%B8%D0%B9_%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE_%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комінтерну",
                "newName": "Яхненківська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D1%85%D0%BD%D0%B5%D0%BD%D0%BA%D0%B8",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Кольчугіна",
                "newName": "Шовковична"
            },
            {
                "type": "street",
                "oldName": "Котовського",
                "newName": "Івана Труби",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B1%D0%B0_%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Кочкіна",
                "newName": "Євгена Вирового",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D0%B9_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Кочкіна",
                "newName": "Вирового",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D0%B9_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Краснопресненська",
                "newName": "Самійла Величка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D1%87%D0%BA%D0%BE_%D0%A1%D0%B0%D0%BC%D1%96%D0%B9%D0%BB%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "impasse",
                "oldName": "Краснопресненський",
                "newName": "Самійлівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D1%87%D0%BA%D0%BE_%D0%A1%D0%B0%D0%BC%D1%96%D0%B9%D0%BB%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Красносельська",
                "newName": "Сільська"
            },
            {
                "type": "street",
                "oldName": "Кузнецова",
                "newName": "Опанаса Ковпака",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D0%BF%D0%B0%D0%BA_%D0%9E%D0%BF%D0%B0%D0%BD%D0%B0%D1%81_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Лебедя",
                "newName": "Федора Сторубля",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%BE%D1%80%D1%83%D0%B1%D0%B5%D0%BB%D1%8C_%D0%A4%D0%B5%D0%B4%D1%96%D1%80_%D0%A5%D0%BE%D0%BC%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Леоніда Брежнєва",
                "newName": "Братства тарасівців",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%BE_%D1%82%D0%B0%D1%80%D0%B0%D1%81%D1%96%D0%B2%D1%86%D1%96%D0%B2",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Лепсе",
                "newName": "Миколи Кузьменка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%B7%D1%8C%D0%BC%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Логаша",
                "newName": "Івана Пулюя",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D1%83%D0%BB%D1%8E%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Логаша",
                "newName": "Івана Пулюя",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D1%83%D0%BB%D1%8E%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Людміли Мокієвської",
                "newName": "Крушельницької",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%8F_%D0%90%D0%BC%D0%B2%D1%80%D0%BE%D1%81%D1%96%D1%97%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Малишева",
                "newName": "Василя Тютюнника",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D1%8E%D1%82%D1%8E%D0%BD%D0%BD%D0%B8%D0%BA_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Малишева",
                "newName": "Тютюнника",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D1%8E%D1%82%D1%8E%D0%BD%D0%BD%D0%B8%D0%BA_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "impasse",
                "oldName": "Малишева",
                "newName": "Тютюнника",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D1%8E%D1%82%D1%8E%D0%BD%D0%BD%D0%B8%D0%BA_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Манкевича",
                "newName": "Галі Мазуренко",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B7%D1%83%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%93%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Менжинського",
                "newName": "Миколи Сумцова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%83%D0%BC%D1%86%D0%BE%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Моріса Тореза",
                "newName": "Березанівська",
                "link": {
                    "href": "http://wikimapia.org/14187370/uk/%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D1%96%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "embankment",
                "oldName": "Набережна Чудновського",
                "newName": "Набережна Старосамарська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80_(%D0%BC%D1%96%D1%81%D1%82%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Орджонікідзе",
                "newName": "Петра Бикова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B8%D0%BA%D0%BE%D0%B2_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Пархоменка",
                "newName": "Григорія Граб’янки",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B1%D1%8F%D0%BD%D0%BA%D0%B0_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%96%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Пелагеї Поляхової",
                "newName": "Лебединська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Піонерська",
                "newName": "Олени Пчілки",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0_%D0%9F%D1%87%D1%96%D0%BB%D0%BA%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Пролетарської перемоги",
                "newName": "Каразінський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B7%D1%96%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Пролетарської перемоги",
                "newName": "Василя Каразіна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B7%D1%96%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Радгоспна",
                "newName": "Нестора Махна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%85%D0%BD%D0%BE_%D0%9D%D0%B5%D1%81%D1%82%D0%BE%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сафонова",
                "newName": "Новгород-Сіверська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D0%A1%D1%96%D0%B2%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Сиворонова",
                "newName": "Софії Русової",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D0%BE%D0%B2%D0%B0_%D0%A1%D0%BE%D1%84%D1%96%D1%8F_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Сиворонова",
                "newName": "Веселковий"
            },
            {
                "type": "street",
                "oldName": "Пролетарської перемоги",
                "newName": "Каразінський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B7%D1%96%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Стаханівців",
                "newName": "Івана Сокульского",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BA%D1%83%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "area",
                "oldName": "Фрунзенський-1",
                "newName": "Ломівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BC%D1%96%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "area",
                "oldName": "Фрунзенський-2",
                "newName": "Кам’янський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%27%D1%8F%D0%BD%D0%BA%D0%B0_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Цюрюпинський",
                "newName": "Весняних конвалій"
            },
            {
                "type": "street",
                "oldName": "Чапаєва",
                "newName": "Олександра Потебні",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D1%82%D0%B5%D0%B1%D0%BD%D1%8F_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9E%D0%BF%D0%B0%D0%BD%D0%B0%D1%81%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "island",
                "oldName": "Червоний Водник",
                "newName": "Водник"
            },
            {
                "type": "street",
                "oldName": "Червоноармійська",
                "newName": "Просвітянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B5_%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%81%D1%82%D0%B2%D0%BE_%C2%AB%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%B0%C2%BB_%D1%96%D0%BC%D0%B5%D0%BD%D1%96_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%B0_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Червоного казацтва",
                "newName": "Терещенківська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%BA%D0%B8_%28%D1%80%D1%96%D0%B4%29",
                    "type": 3
                }

            },
            {
                "type": "street",
                "oldName": "Червонопартизанська",
                "newName": "Василя Макуха",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%83%D1%85_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Бурятський",
                "newName": "Бучанський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%83%D1%87%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Воркутинський",
                "newName": "Вольовий"
            },
            {
                "type": "street",
                "oldName": "Ростовська",
                "newName": "Конотопська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D1%82%D0%BE%D0%BF",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Ростовський",
                "newName": "Конотопський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D1%82%D0%BE%D0%BF",
                    "type": 2
                }
            },
            {
                "type": "impasse",
                "oldName": "Ростовський",
                "newName": "Конотопський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D1%82%D0%BE%D0%BF",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Тагільська",
                "newName": "Новоазовська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B0%D0%B7%D0%BE%D0%B2%D1%81%D1%8C%D0%BA",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Тагільський",
                "newName": "Новоазовський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B0%D0%B7%D0%BE%D0%B2%D1%81%D1%8C%D0%BA",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Уфімська",
                "newName": "Деснянська"
            },
            {
                "type": "street",
                "oldName": "Хабарівська",
                "newName": "Салтівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D1%82%D1%96%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            }
        ]
    },
    "r62": {
        "oldAreaName": "Бабушкінський",
        "newAreaName": "Шевченківський",
        "objects": [
            {
                "type": "street",
                "oldName": "XXII партз'їзду",
                "newName": "Вознесенська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "40 років комсомолу",
                "newName": "Антіна Синявського",
                "link" : {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%90%D0%BD%D1%82%D1%96%D0%BD_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "40 років комсомолу",
                "newName": "Синявського",
                "link" : {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%90%D0%BD%D1%82%D1%96%D0%BD_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Артема",
                "newName": "Січових стрільців",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D1%87%D0%BE%D0%B2%D1%96_%D0%A1%D1%82%D1%80%D1%96%D0%BB%D1%8C%D1%86%D1%96",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Благоєва",
                "newName": "Сергія Подолинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Володарського",
                "newName": "Олександра Кониського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B8%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "avenue",
                "oldName": "Героїв Сталінграда",
                "newName": "Богдана Хмельницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Гопнер",
                "newName": "Магдебурзького права",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%B4%D0%B5%D0%B1%D1%83%D1%80%D0%B7%D1%8C%D0%BA%D0%B5_%D0%BF%D1%80%D0%B0%D0%B2%D0%BE",
                    "type": 3
                }
            },
            {
                "type": "lane",
                "oldName": "Дибенка",
                "newName": "Привабливий"
            },
            {
                "type": "street",
                "oldName": "Дибенка",
                "newName": "Василя Кука",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BA_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Димитрова",
                "newName": "Михайла Драгоманова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D1%80%D0%B0%D0%B3%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "station",
                "oldName": "Дніпропетровськ-Вантажний",
                "newName": "Дніпро-Вантажний"
            },
            {
                "type": "station",
                "oldName": "Дніпропетровськ-Ліски",
                "newName": "Дніпро-Ліски"
            },
            {
                "type": "avenue",
                "oldName": "Ілліча",
                "newName": "Пилипа Орлика",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF_%D0%9E%D1%80%D0%BB%D0%B8%D0%BA",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Карла Лібкнехта",
                "newName": "Михайла Грушевського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "avenue",
                "oldName": "Карла Маркса",
                "newName": "Дмитра Яворницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%BE%D1%80%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комсомольська",
                "newName": "Старокозацька"
            },
            {
                "type": "street",
                "oldName": "Копилова",
                "newName": "Бориса Познанського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%A1%D1%82%D0%B0%D0%BD%D1%96%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Копилова",
                "newName": "Бориса Познанського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B7%D0%BD%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%A1%D1%82%D0%B0%D0%BD%D1%96%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Корнійчука",
                "newName": "Бориса Мозолевського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B7%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Лалаянца",
                "newName": "Скляренка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BB%D1%8F%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Лалаянца",
                "newName": "Семена Скляренка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BB%D1%8F%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Леніна",
                "newName": "Воскресенська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Мануїльского",
                "newName": "Михайла Максимовича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Миронова",
                "newName": "Європейська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%84%D0%B2%D1%80%D0%BE%D0%BF%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Московська",
                "newName": "Володимира Мономаха",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9C%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%85",
                    "type": 0
                }
            },
            {
                "type": "embankment",
                "oldName": "ім. В.І. Леніна",
                "newName": "Січеславська набережна"
            },
            {
                "type": "street",
                "oldName": "Пеліна",
                "newName": "Катерини Мессарош",
                "link": {
                    "href": "http://zorya.org.ua/istoriya/zrikalas-zatishku-y-komfortu-6043.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Перекопської Перемоги",
                "newName": "Олександри Риндовської",
                "link": {
                    "href": "http://museum.dp.ua/article0598.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Петра Моїсеєнка",
                "newName": "Леся Курбаса",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D1%8C_%D0%9A%D1%83%D1%80%D0%B1%D0%B0%D1%81",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Плеханова",
                "newName": "Князя Володимира Великого",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Подвойського",
                "newName": "Осипа Бодянського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%B4%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D1%81%D0%B8%D0%BF_%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Садовниченка",
                "newName": "Августина Волошина",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD_%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8%D0%BD_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Садовниченка",
                "newName": "Августина Волошина",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D1%88%D0%B8%D0%BD_%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B8%D0%BD_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сєрова",
                "newName": "Андрія Фабра",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Тельмана",
                "newName": "Ігоря Сікорського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%86%D0%B3%D0%BE%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Ткаченка",
                "newName": "Вадима Сідура",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D0%B4%D1%83%D1%80_%D0%92%D0%B0%D0%B4%D0%B8%D0%BC_%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Цхакая",
                "newName": "Улюблений"
            },
            {
                "type": "street",
                "oldName": "Цхакая",
                "newName": "Василя Біднова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%96%D0%B4%D0%BD%D0%BE%D0%B2_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "square",
                "oldName": "Червона",
                "newName": "Троїцька",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D1%97%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Червона",
                "newName": "Троїцька",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D1%97%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Чередниченка",
                "newName": "Михайла Вербицького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B1%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Чередниченка",
                "newName": "Вербицького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B1%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "street",
                "oldName": "Чкалова",
                "newName": "Святослава Хороброго",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%A5%D0%BE%D1%80%D0%BE%D0%B1%D1%80%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Ширшова",
                "newName": "В’ячеслава Липинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BF%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92'%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2_%D0%9A%D0%B0%D0%B7%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Шпіндяка",
                "newName": "Симона Петлюри",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D0%BB%D1%8E%D1%80%D0%B0_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Юних ленінцев",
                "newName": "Козака Мамая",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B7%D0%B0%D0%BA_%D0%9C%D0%B0%D0%BC%D0%B0%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Якіра",
                "newName": "Івана Сулими",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%A1%D1%83%D0%BB%D0%B8%D0%BC%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Якіра",
                "newName": "Сулимівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87_%D0%A1%D1%83%D0%BB%D0%B8%D0%BC%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Дарвіна",
                "newName": "Яна Ходоровського",
                "link": {
                    "href": "http://db.yadvashem.org/righteous/righteousName.html?language=ru&itemId=4034486",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Абхазська",
                "newName": "Ірпінська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D1%80%D0%BF%D1%96%D0%BD%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Абхазський",
                "newName": "Ірпінський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D1%80%D0%BF%D1%96%D0%BD%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Ярославська",
                "newName": "Вишгородська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B8%D1%88%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Рибінська",
                "newName": "25-ї Січеславської Бригади",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/25-%D1%82%D0%B0_%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B0_%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F%D0%BD%D0%BE%D0%B4%D0%B5%D1%81%D0%B0%D0%BD%D1%82%D0%BD%D0%B0_%D0%B1%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%D0%B0_(%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0)",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Челюскіна",
                "newName": "93-ї Холодноярської Бригади",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/93-%D1%82%D1%8F_%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B0_%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D1%96%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0_%D0%B1%D1%80%D0%B8%D0%B3%D0%B0%D0%B4%D0%B0_%C2%AB%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9_%D0%AF%D1%80%C2%BB",
                    "type": 3
                }
            }
        ]
    },
    "r63": {
        "oldAreaName": "Жовтневий",
        "newAreaName": "Соборний",
        "objects": [
            {
                "type": "street",
                "oldName": "Арсеничева",
                "newName": "Олександра Рейнгарда",
                "link": {
                    "href": "http://www.rusdeutsch-panorama.ru/jencik_statja.php?mode=view&site_id=34&own_menu_id=3842",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Баумана",
                "newName": "Павла Нірінберга",
                "link": {
                    "href": "http://www.gorod.dp.ua/tema/persons/?pageid=1047",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Бонч-Бруєвича",
                "newName": "Дмитра Байди-Вишневецького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%92%D0%B8%D1%88%D0%BD%D0%B5%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Боженка",
                "newName": "Хортицька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Ворошилова",
                "newName": "Сергія Єфремова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%84%D1%84%D1%80%D0%B5%D0%BC%D0%BE%D0%B2_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Генерала Грушевого",
                "newName": "Гетьмана Петра Дорошенка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%94%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%BD%D0%BA%D0%BE",
                    "type": 0
                }
            },
            {
                "type": "square",
                "oldName": "Дем’яна Бєдного",
                "newName": "Успенська",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Дзержинського",
                "newName": "Володимира Вернадського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%BD%D0%B0%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Дмитра Донського",
                "newName": "Дмитра Донцова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%BD%D1%86%D0%BE%D0%B2_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "station",
                "oldName": "Дніпропетровськ-Південний",
                "newName": "Дніпро-Лоцманська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D0%BE%D1%86%D0%BC%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%9A%D0%B0%D0%BC%27%D1%8F%D0%BD%D0%BA%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "park",
                "oldName": "Жовтневий",
                "newName": "Івана Старова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B2_%D0%86%D0%B2%D0%B0%D0%BD_%D0%84%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "square",
                "oldName": "Жовтнева",
                "newName": "Соборна",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81%D0%BE-%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_(%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Жуковського",
                "newName": "Василя Жуковського",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "avenue",
                "oldName": "Карла Маркса",
                "newName": "Дмитра Яворницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%BE%D1%80%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Клари Цеткін",
                "newName": "Володимира Моссаковського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D1%81%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Колгоспний",
                "newName": "Лоцманів Казанців",
                "link": {
                    "href": "http://www.radiosvoboda.org/content/article/25008389.html",
                    "type": 3
                }
            },
            {
                "type": "island",
                "oldName": "Комсомольський",
                "newName": "Монастирський",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Коцюбинського",
                "newName": "Михайла Коцюбинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%86%D1%8E%D0%B1%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Куйбишева",
                "newName": "Володимира Винниченка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Ласточкіна",
                "newName": "Миколи Гнатюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%BD%D0%B0%D1%82%D1%8E%D0%BA_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "park",
                "oldName": "М.О.Щолокова",
                "newName": "Юрія Переможця",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%B8%D0%B9_%D0%AE%D1%80%D1%96%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Мироненка",
                "newName": "Олени Ган",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD_%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D1%97%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "МОПРа",
                "newName": "Григорія Омельченка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9E%D0%BC%D0%B5%D0%BB%D1%8C%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%96%D0%B9_%D0%9C%D0%B8%D0%BA%D0%B8%D1%82%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "embankment",
                "oldName": "ім. В.І. Леніна",
                "newName": "Січеславська Набережна"
            },
            {
                "type": "street",
                "oldName": "Погребняка",
                "newName": "Полігонна",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Паризької Комуни",
                "newName": "Борислава Брондукова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%80%D0%BE%D0%BD%D0%B4%D1%83%D0%BA%D0%BE%D0%B2_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BB%D0%B0%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Радянський",
                "newName": "Феодосія Макаревського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A4%D0%B5%D0%BE%D0%B4%D0%BE%D1%81%D1%96%D0%B9_%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "slope",
                "oldName": "Рогальова",
                "newName": "Крутогірний",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Рози Люксембург",
                "newName": "Марії Заньковецької",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%D1%86%D1%8C%D0%BA%D0%B0_%D0%9C%D0%B0%D1%80%D1%96%D1%8F_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "slope",
                "oldName": "Тольятті",
                "newName": "Кодацький",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D1%96_%D0%9A%D0%BE%D0%B4%D0%B0%D0%BA%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Тупик Червоної балки",
                "newName": "Бузиновий"
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Урицького",
                "newName": "Євгена Коновальця",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BB%D0%B5%D1%86%D1%8C_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "slope",
                "oldName": "Урицького",
                "newName": "Струківський"
            },
            {
                "type": "street",
                "oldName": "Фурманова",
                "newName": "Героїв Крут",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%96%D0%B9_%D0%BF%D1%96%D0%B4_%D0%9A%D1%80%D1%83%D1%82%D0%B0%D0%BC%D0%B8",
                    "type": 1
                }
            },
            {
                "type": "lane",
                "oldName": "Фурманова",
                "newName": "Героїв Крут",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%96%D0%B9_%D0%BF%D1%96%D0%B4_%D0%9A%D1%80%D1%83%D1%82%D0%B0%D0%BC%D0%B8",
                    "type": 1
                }
            },
            {
                "type": "street",
                "oldName": "Фучіка",
                "newName": "Івана Акінфієва",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%BA%D1%96%D0%BD%D1%84%D1%96%D1%94%D0%B2_%D0%86%D0%B2%D0%B0%D0%BD_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Червона балка",
                "newName": "Крута балка"
            },
            {
                "type": "impasse",
                "oldName": "Червона балка",
                "newName": "Крута балка"
            },
            {
                "type": "lane",
                "oldName": "Червона балка",
                "newName": "Крута балка"
            },
            {
                "type": "street",
                "oldName": "Червоноповстанська балка",
                "newName": "Довга балка",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Чекистів",
                "newName": "Переможна",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Чубаря",
                "newName": "Володимира Сосюри",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D1%8E%D1%80%D0%B0_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Шаумяна",
                "newName": "Архітектора Дольника",
                "link": {
                    "href": "http://dp.vgorode.ua/news/luidy_horoda/182094-dolnyk---chelovek-kotoryi-yzmenyl-dnepropetrovsk-vse-stroytelnye-proekty",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Ясна",
                "newName": "Родини Зубкових",
                "link": {
                    "href": "http://db.yadvashem.org/righteous/family.html?language=ru&itemId=4035796",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "8 Березня",
                "newName": "Мусліма Магомаєва",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%BE%D0%BC%D0%B0%D1%94%D0%B2_%D0%9C%D1%83%D1%81%D0%BB%D1%96%D0%BC_%D0%9C%D0%B0%D0%B3%D0%BE%D0%BC%D0%B5%D1%82%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Абхазська",
                "newName": "Ірпінська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D1%80%D0%BF%D1%96%D0%BD%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Білгородська",
                "newName": "Наукових працівників"
            }
        ]
    },
    "r64": {
        "oldAreaName": "Індустріальний",
        "newAreaName": "Індустріальний",
        "objects": [
            {
                "type": "street",
                "oldName": "Бєлінського",
                "newName": "Ізмаїла Срезневського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B7%D0%BD%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%86%D0%B7%D0%BC%D0%B0%D1%97%D0%BB_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Винокурова",
                "newName": "Дніпросталівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%B0%D0%BB%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "avenue",
                "oldName": "ім. Газети Правда",
                "newName": "Слобожанський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B1%D0%BE%D0%B6%D0%B0%D0%BD%D1%89%D0%B8%D0%BD%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "park",
                "oldName": "ім. Воронцова",
                "newName": "Сагайдак",
                "restored": true
            },
            {
                "type": "area",
                "oldName": "КІМа",
                "newName": "Мелітопольска",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BB%D1%96%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "area",
                "oldName": "Клочко",
                "newName": "Калиновський"
            },
            {
                "type": "street",
                "oldName": "Комісара Крилова",
                "newName": "Олександра Оцупа",
                "link": {
                    "href": "http://tsarselo.ru/yenciklopedija-carskogo-sela/istorija-carskogo-sela-v-licah/ocup-aleksandr-avdeevich-psevd-sergei-gornyi-1882-1948.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "avenue",
                "oldName": "Косіора",
                "newName": "Петра Калнишевського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%BD%D0%B8%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Радгоспна",
                "newName": "Василя Сухомлинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%83%D1%85%D0%BE%D0%BC%D0%BB%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Радянської Армії",
                "newName": "Волонтерська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Смольна",
                "newName": "Всеволода Нестайка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%B5%D1%81%D1%82%D0%B0%D0%B9%D0%BA%D0%BE_%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B4_%D0%97%D1%96%D0%BD%D0%BE%D0%B2%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Червонопартизанська",
                "newName": "Василя Макуха",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%83%D1%85_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Щербини",
                "newName": "Миколи Міхновського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D1%85%D0%BD%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Саратівська",
                "newName": "Новокаховська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%B0_%D0%9A%D0%B0%D1%85%D0%BE%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Магаданська",
                "newName": "Волонтерська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE",
                    "type": 3
                }
            },
            {
                "type": "lane",
                "oldName": "Московський",
                "newName": "Азовсталі",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D0%B2%D1%81%D1%82%D0%B0%D0%BB%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Пулковська",
                "newName": "Дебальцівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%B5%D0%B1%D0%B0%D0%BB%D1%8C%D1%86%D0%B5%D0%B2%D0%B5",
                    "type": 2
                }
            }
        ]
    },
    "r65": {
        "oldAreaName": "Кіровський",
        "newAreaName": "Центральний",
        "objects": [
            {
                "type": "street",
                "oldName": "XXII партз’зду",
                "newName": "Вознесенська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "55 років ВЛКСМ",
                "newName": "Пластівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/Пласт_(організація)",
                    "type": 3
                }
            },
            {
                "type": "square",
                "oldName": "80-річчя Дніпропетровської області",
                "newName": "Козацька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B7%D0%B0%D1%86%D1%82%D0%B2%D0%BE",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Благоєва",
                "newName": "Сергія Подолинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Вакуленчука",
                "newName": "Леоніда Стромцова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%BE%D0%BC%D1%86%D0%BE%D0%B2_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4_%D0%9D%D0%B8%D0%BA%D0%B8%D1%84%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Войцеховича",
                "newName": "Миколи Руденка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A0%D1%83%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "avenue",
                "oldName": "Героїв Сталінграда",
                "newName": "Богдана Хмельницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Горького",
                "newName": "Княгині Ольги",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0_%28%D0%BA%D0%BD%D1%8F%D0%B3%D0%B8%D0%BD%D1%8F%29",
                    "type": 0
                }
            },
            {
                "type": "square",
                "oldName": "Горького",
                "newName": "Половицька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D1%86%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Димитрова",
                "newName": "Михайла Драгоманова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D1%80%D0%B0%D0%B3%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "station",
                "oldName": "Дніпропетровськ",
                "newName": "Дніпро-Головний"
            },
            {
                "type": "park",
                "oldName": "ім. Леніна",
                "newName": "Героїв"
            },
            {
                "type": "park",
                "oldName": "ім. Ленінського Комсомолу",
                "newName": "Зелений Гай"
            },
            {
                "type": "street",
                "oldName": "Ілліча",
                "newName": "Пилипа Орлика",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF_%D0%9E%D1%80%D0%BB%D0%B8%D0%BA",
                    "type": 0
                }
            },
            {
                "type": "avenue",
                "oldName": "Карла Маркса",
                "newName": "Дмитра Яворницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%BE%D1%80%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "avenue",
                "oldName": "Кірова",
                "newName": "Олександра Поля",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комсомольська",
                "newName": "Старокозацька"
            },
            {
                "type": "street",
                "oldName": "Краснозаводська",
                "newName": "Академіка Белелюбського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%94%D0%BB%D0%B5%D0%BB%D1%8E%D0%B1%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Леніна",
                "newName": "Воскресенська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Ленінградська",
                "newName": "Князя Ярослава Мудрого",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%9C%D1%83%D0%B4%D1%80%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "square",
                "oldName": "Миколи Островського",
                "newName": "Старомостова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%BC%D1%83%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D1%96%D1%81%D1%82",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Мініна",
                "newName": "Менахем-Мендл Шнеєрсона",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D0%B0%D1%85%D0%B5%D0%BC_%D0%9C%D0%B5%D0%BD%D0%B4%D0%BB_%D0%A8%D0%BD%D0%B5%D1%94%D1%80%D1%81%D0%BE%D0%BD",
                    "type": 0
                }
            },
            {
                "type": "embankment",
                "oldName": "набережна ім. В.І. Леніна",
                "newName": "Січеславська Набережна"
            },
            {
                "type": "square",
                "oldName": "Петровського",
                "newName": "Вокзальна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE-%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Плеханова",
                "newName": "Князя Володимира Великого",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Свердлова",
                "newName": "Володимира Антоновича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%91%D0%BE%D0%BD%D1%96%D1%84%D0%B0%D1%82%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сергія Лазо",
                "newName": "Кулишівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D1%96%D1%88_%D0%9F%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%D0%BC%D0%BE%D0%BD_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сєрова",
                "newName": "Андрія Фабра",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Тельмана",
                "newName": "Ігоря Сікорського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%86%D0%B3%D0%BE%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Фрунзе",
                "newName": "Василя Чапленка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BF%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Червонофлотська",
                "newName": "Петра Григоренка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Чичеріна",
                "newName": "Надії Алексєєнко",
                "restored": true,
                "link": {
                    "href": "http://www.gorod.dp.ua/tema/persons/?pageid=790",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "avenue",
                "oldName": "Чкалова",
                "newName": "Святослава Хороброго",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%A5%D0%BE%D1%80%D0%BE%D0%B1%D1%80%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Шпіндяка",
                "newName": "Симона Петлюри",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D0%BB%D1%8E%D1%80%D0%B0_%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Щербицького",
                "newName": "Олени Блавацької",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B2%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0_%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Щорса",
                "newName": "Костомарівська",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Дарвіна",
                "newName": "Яна Ходоровського",
                "link": {
                    "href": "http://db.yadvashem.org/righteous/righteousName.html?language=ru&itemId=4034486",
                    "type": 0
                }
            }
        ]
    },
    "r66": {
        "oldAreaName": "Красногвардійський",
        "newAreaName": "Чечелівський",
        "objects": [
            {
                "type": "street",
                "oldName": "Бабушкіна",
                "newName": "Романа Шухевича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A8%D1%83%D1%85%D0%B5%D0%B2%D0%B8%D1%87_%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD_%D0%9E%D1%81%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Балка колгоспна",
                "newName": "Балка мальовнича"
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Більшовицький",
                "newName": "Холодноярська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9_%D0%AF%D1%80",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Братів Міллер",
                "newName": "Леоніда Жебуньова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%96%D0%B5%D0%B1%D1%83%D0%BD%D1%8C%D0%BE%D0%B2_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Булигіна",
                "newName": "Івана Езау",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%95%D0%B7%D0%B0%D1%83_%D0%86%D0%B2%D0%B0%D0%BD_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Вахрушева",
                "newName": "Василя Сидоренка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "newType": "avenue",
                "oldName": "Героїв Сталінграда",
                "newName": "Богдана Хмельницького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD_%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Героїв Краснодона",
                "newName": "Яготинська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%B3%D0%BE%D1%82%D0%B8%D0%BD",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Ілліча",
                "newName": "Орлика",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF_%D0%9E%D1%80%D0%BB%D0%B8%D0%BA",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Інтернаціональний",
                "newName": "Білих акацій"
            },
            {
                "type": "avenue",
                "oldName": "Калініна",
                "newName": "Нігояна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%B3%D0%BE%D1%8F%D0%BD_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%93%D0%B0%D0%B3%D1%96%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Калініна",
                "newName": "Січовий",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D1%87",
                    "type": 2
                }
            },
            {
                "type": "slope",
                "oldName": "Калініна",
                "newName": "Ярмарковий"
            },
            {
                "type": "park",
                "oldName": "ім. Калініна",
                "newName": "Пам’яті та Примирення"
            },
            {
                "type": "street",
                "oldName": "Калінінградська",
                "newName": "Трофима Романченка",
                "link": {
                    "href": "http://www.gorod.dp.ua/tema/persons/?pageid=2139",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Краснозаводська",
                "newName": "Академіка Белелюбського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D1%94%D0%BB%D0%B5%D0%BB%D1%8E%D0%B1%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Красночечелівська",
                "newName": "Олександра Чернікова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%96%D0%BA%D0%BE%D0%B2_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%AE%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Крошки",
                "newName": "Михайла Комарова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Марини Раскової",
                "newName": "Олександра Верховцева",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BE%D0%B2%D1%86%D0%B5%D0%B2_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%90%D0%BF%D0%BF%D0%BE%D0%BB%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Меренкова",
                "newName": "Павла Полуботка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%9F%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D1%82%D0%BE%D0%BA",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Новоколгоспна",
                "newName": "Острозька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B3",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Перекопська",
                "newName": "Бессарабська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D1%81%D0%B0%D1%80%D0%B0%D0%B1%D1%96%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Піонерський",
                "newName": "Скаутський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D0%B3",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Правди",
                "newName": "Олексія Тищика",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B8%D1%89%D0%B8%D0%BA_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Профінтерну",
                "newName": "Володимира Хреннікова",
                "link": {
                    "href": "http://www.gorod.dp.ua/tema/persons/?pageid=797",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "П’ятирічки",
                "newName": "Шляхівська",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Свердлова",
                "newName": "Володимира Антоновича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%91%D0%BE%D0%BD%D1%96%D1%84%D0%B0%D1%82%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Січнева",
                "newName": "Костя Пестушка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81%D1%82%D1%83%D1%88%D0%BA%D0%BE_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD_%D0%AE%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Січнева",
                "newName": "Костя Пестушка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81%D1%82%D1%83%D1%88%D0%BA%D0%BE_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD_%D0%AE%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Соціалістична",
                "newName": "Павла Чубинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A7%D1%83%D0%B1%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Чичеріна",
                "newName": "Надії Алексєєнко",
                "restored": true,
                "link": {
                    "href": "http://www.gorod.dp.ua/tema/persons/?pageid=790",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Алтайська",
                "newName": "Чечелівський"
            },
            {
                "type": "lane",
                "oldName": "Біломорський",
                "newName": "Чорнобаївський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B1%D0%B0%D1%97%D0%B2%D0%BA%D0%B0_(%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Кабардинська",
                "newName": "Гостомельська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D1%81%D1%82%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Кронштадтська",
                "newName": "Бородянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D1%8F%D0%BD%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Кронштадтська",
                "newName": "Бородянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D1%8F%D0%BD%D0%BA%D0%B0",
                    "type": 2
                }
            }
        ]
    },
    "r67": {
        "oldAreaName": "Ленінський",
        "newAreaName": "Новокодацький",
        "objects": [
            {
                "type": "street",
                "oldName": "80-річчя Дніпропетровщини",
                "newName": "Олександра Красносельского",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D0%B5%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9B%D0%B5%D0%BE%D0%BD%D1%82%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "XIX партз'їзду",
                "newName": "Івана Гонти",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D2%90%D0%BE%D0%BD%D1%82%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Аверіна",
                "newName": "Курінна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%96%D0%BD%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Аврори",
                "newName": "Трифона Гладченка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%BB%D0%B0%D0%B4%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%A2%D1%80%D0%B8%D1%84%D0%BE%D0%BD_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Бібікова",
                "newName": "Павла Бута",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%91%D1%83%D1%82",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Блюхера",
                "newName": "Романа Мстиславовича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD_%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Большунова",
                "newName": "Данила Сахненка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D1%85%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE_%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Боженка",
                "newName": "Хортицька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Братів Трофімових",
                "newName": "Діївський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D1%96%D1%97%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Братів Трофімових",
                "newName": "Велика Діївська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D1%96%D1%97%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Братів Каменських",
                "newName": "Зернова",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Братів Ковальчуків",
                "newName": "Байдаківська",
                "restored": true,
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%B4%D0%B0%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%82%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Будьонного",
                "newName": "Данила Галицького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE_%D0%93%D0%B0%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Валявки",
                "newName": "Данила Апостола",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE_%D0%90%D0%BF%D0%BE%D1%81%D1%82%D0%BE%D0%BB",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Власенка",
                "newName": "Гулака-Артемовського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D1%83%D0%BB%D0%B0%D0%BA-%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Войцеховський",
                "newName": "Швидкісний"
            },
            {
                "type": "street",
                "oldName": "Володимира Ошка",
                "newName": "Солідарності"
            },
            {
                "type": "street",
                "oldName": "Героїв революції",
                "newName": "Сергія Параджанова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B0%D0%B4%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%99%D0%BE%D1%81%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Губанова",
                "newName": "Лубеньска",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D1%83%D0%B1%D0%BD%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "square",
                "oldName": "Дзержинського",
                "newName": "Новокодацька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%96_%D0%9A%D0%BE%D0%B4%D0%B0%D0%BA%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Дзержинського (Таромське)",
                "newName": "Коханівська"
            },
            {
                "type": "lane",
                "oldName": "Дзержинського (Таромське)",
                "newName": "Зоряний"
            },
            {
                "type": "street",
                "oldName": "Дибенка",
                "newName": "Хотинська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D1%82%D0%B8%D0%BD",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Димитрова (Таромське)",
                "newName": "Хизовська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D1%96%D0%B7%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Єрмака",
                "newName": "Кленовий"
            },
            {
                "type": "street",
                "oldName": "Жовтенят",
                "newName": "Фортечна",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D0%B0%D1%86%D1%8C%D0%BA%D0%B0_%D1%84%D0%BE%D1%80%D1%82%D0%B5%D1%86%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Жовтенева (Таромське)",
                "newName": "Золотоосіння"
            },
            {
                "type": "lane",
                "oldName": "Жовтеневий (Таромське)",
                "newName": "Золотоосінній"
            },
            {
                "type": "street",
                "oldName": "Замарайкіна",
                "newName": "Корсунська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%81%D1%83%D0%BD%D1%8C-%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Івана Сусаніна",
                "newName": "Майстрів"
            },
            {
                "type": "lane",
                "oldName": "Івана Сусаніна",
                "newName": "Майстрів"
            },
            {
                "type": "park",
                "oldName": "ім. Леніна",
                "newName": "Новокодацький",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%96_%D0%9A%D0%BE%D0%B4%D0%B0%D0%BA%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Карпуші",
                "newName": "Єлагінська"
            },
            {
                "type": "street",
                "oldName": "Квірінга",
                "newName": "Бельгійська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D1%8C%D0%B3%D1%96%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Кірінаківська",
                "newName": "Деревлянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BB%D1%8F%D0%BD%D0%B8",
                    "type": 3
                }
            },
            {
                "type": "impasse",
                "newType": "street",
                "oldName": "Кірова (Таромське)",
                "newName": "Мальвова"
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Кірова (Таромське)",
                "newName": "Назарія Яремчука",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D1%80%D0%B5%D0%BC%D1%87%D1%83%D0%BA_%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D1%96%D0%B9_%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Кірова",
                "newName": "Старий шлях",
                "restored": true
            },
            {
                "type": "street",
                "oldName": "Колгоспна",
                "newName": "Фермерська"
            },
            {
                "type": "street",
                "oldName": "Коллонтай",
                "newName": "Ганни Барвінок",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD%D0%BD%D0%B0_%D0%91%D0%B0%D1%80%D0%B2%D1%96%D0%BD%D0%BE%D0%BA",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комбідівська (Таромське)",
                "newName": "Василя Хитя",
                "link": {
                    "href": "http://dv-gazeta.info/old/4/v-aprele-1945-go.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комісарівська",
                "newName": "Гайдамацька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%B9%D0%B4%D0%B0%D0%BC%D0%B0%D0%BA%D0%B8",
                    "type": 3
                }
            },
            {
                "type": "lane",
                "oldName": "Комісарівський",
                "newName": "Гайдамацький",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%B9%D0%B4%D0%B0%D0%BC%D0%B0%D0%BA%D0%B8",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Комітетська",
                "newName": "Василя Капніста",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BF%D0%BD%D1%96%D1%81%D1%82_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комсомольська (Таромське)",
                "newName": "Айдарівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%B9%D0%B4%D0%B0%D1%80",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Комсомольський (Таромське)",
                "newName": "Дібровська",
                "restored": true
            },
            {
                "type": "area",
                "oldName": "Комунар",
                "newName": "Покровський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96",
                    "type": 1
                }
            },
            {
                "type": "street",
                "oldName": "Комунарівська",
                "newName": "Юрія Кондратюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B4%D1%80%D0%B0%D1%82%D1%8E%D0%BA_%D0%AE%D1%80%D1%96%D0%B9_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "station",
                "oldName": "Комунарівська",
                "newName": "Покровська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96",
                    "type": 1
                }
            },
            {
                "type": "street",
                "oldName": "Косарева",
                "newName": "Сіверянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%96%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%B8",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Костичева",
                "newName": "Леся Танюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Костичева",
                "newName": "Леся Танюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Котовського (Таромське)",
                "newName": "Тернівська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0_%D0%A2%D0%B5%D1%80%D0%BD%D1%96%D0%B2%D0%BA%D0%B0_%28%D1%80%D1%96%D1%87%D0%BA%D0%B0%29",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Красіна",
                "newName": "Косівський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%96%D0%B2",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Красіна",
                "newName": "Криштофа Косинського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D1%88%D1%82%D0%BE%D1%84_%D0%9A%D0%BE%D1%81%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Краснодонська",
                "newName": "Іси Мунаєва",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D1%83%D0%BD%D0%B0%D1%94%D0%B2_%D0%86%D1%81%D0%B0_%D0%90%D1%85'%D1%8F%D0%B4%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Крупської",
                "newName": "Баллінська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%BB%D1%96%D0%BD_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Курочкіна",
                "newName": "Семена Бардадима",
                "link": {
                    "href": "http://www.ukrainica.org.ua/en/component/content/article/41-index/191/242-242",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Леніна (Таромське)",
                "newName": "Генерала Воливача",
                "link": {
                    "href": "http://dv-gazeta.info/dneprnews/imya-ivana-volivacha-prisvoili-skveru.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Леніногорська",
                "newName": "Миколи Хвильового",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%A5%D0%B2%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Лукашенка",
                "newName": "Андрія Штогаренка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A8%D1%82%D0%BE%D0%B3%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Луначарського",
                "newName": "Василя Стуса",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D1%83%D1%81_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Людмили Сталь",
                "newName": "Шодуарівська",
                "link": {
                    "href": "http://www.gorod.dp.ua/history/isc/event_ru.php?event=62",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Матлахова",
                "newName": "Костя Гордієнка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%B4%D1%96%D1%94%D0%BD%D0%BA%D0%BE_%D0%9A%D0%BE%D1%81%D1%82%D1%8C",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Митрофана Андреєва",
                "newName": "Петра Сокальского",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Модестова",
                "newName": "Миколи Садовського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Новодзержинська (Таромське)",
                "newName": "Козирева",
                "link": {
                    "href": "http://wikimapia.org/26880401/ru/%D0%91%D0%B0%D0%BB%D0%BA%D0%B0-%D0%9A%D0%BE%D0%B7%D1%8B%D1%80%D0%B5%D0%B2%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Ногинська",
                "newName": "Володимира Івасюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D1%81%D1%8E%D0%BA_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Ногінський",
                "newName": "Яворовий"
            },
            {
                "type": "street",
                "oldName": "Островського (Таромське)",
                "newName": "Миколи Зерова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%97%D0%B5%D1%80%D0%BE%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Островського (Таромське)",
                "newName": "Миколи Зерова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%97%D0%B5%D1%80%D0%BE%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Павла Корчагіна",
                "newName": "Миколи Куліша",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D1%96%D1%88_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%93%D1%83%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Петра Сиротиніна",
                "newName": "Лавандова"
            },
            {
                "type": "avenue",
                "oldName": "Петровського",
                "newName": "Івана Мазепи",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B0%D0%B7%D0%B5%D0%BF%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Піонерська (Таромське)",
                "newName": "Бортницька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D1%82%D0%BD%D0%B8%D1%87%D1%96",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Піонерський (Таромське)",
                "newName": "Марти Головіної"
            },
            {
                "type": "street",
                "oldName": "Повстання",
                "newName": "Мужності"
            },
            {
                "type": "street",
                "oldName": "Покровського",
                "newName": "Покровська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96",
                    "type": 1
                }
            },
            {
                "type": "lane",
                "oldName": "Покровського",
                "newName": "Покровський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B0_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D1%96",
                    "type": 1
                }
            },
            {
                "type": "street",
                "oldName": "Пролетарська",
                "newName": "Галицька",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%BD%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "lane",
                "oldName": "Пролетарська",
                "newName": "Галицький",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%BD%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Радянська (Таромське)",
                "newName": "Славна"
            },
            {
                "type": "street",
                "oldName": "Революційна",
                "newName": "Полковника Горленка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE_%D0%9B%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2%D0%B8%D1%87_%D0%93%D0%BE%D1%80%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Руднєва",
                "newName": "Івана Вишенського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%92%D0%B8%D1%88%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Свердлова (Таромське)",
                "newName": "Казкова"
            },
            {
                "type": "street",
                "oldName": "Сериківська",
                "newName": "Тиверська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B8%D0%B2%D0%B5%D1%80%D1%86%D1%96",
                    "type": 3
                }
            },
            {
                "type": "lane",
                "oldName": "Сериківський",
                "newName": "Тиверський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B8%D0%B2%D0%B5%D1%80%D1%86%D1%96",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Сировця",
                "newName": "Якова Острянина",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%AF%D0%BA%D1%96%D0%B2_%D0%9E%D1%81%D1%82%D1%80%D1%8F%D0%BD%D0%B8%D0%BD",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сільрадська",
                "newName": "Лірницька"
            },
            {
                "type": "street",
                "oldName": "Союзна",
                "newName": "Старобазарна"
            },
            {
                "type": "street",
                "oldName": "Суханова",
                "newName": "Станіслава Оріховського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BD%D1%96%D1%81%D0%BB%D0%B0%D0%B2_%D0%9E%D1%80%D1%96%D1%85%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Тельмана (Таромське)",
                "newName": "Ріжкова"
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Тельмана (Таромське)",
                "newName": "Івана Сохача",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D1%83%D1%85%D0%B0%D1%87%D1%96%D0%B2%D0%BA%D0%B0#%D0%97%D0%B0%D1%81%D0%BD%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Тихона Бондарева",
                "newName": "Карпатська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D0%B8",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Ульяновська (Таромське)",
                "newName": "Михайла Лояна",
                "link": {
                    "href": "http://ukrainica.org.ua/en/content/784",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "newType": "street",
                "oldName": "Фрунзе (Таромське)",
                "newName": "Заборинська"
            },
            {
                "type": "street",
                "oldName": "Фрунзе (Таромське)",
                "newName": "Сержанта Андрющенка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D1%8E%D1%89%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Фурманова",
                "newName": "Олени Теліги",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BB%D1%96%D0%B3%D0%B0_%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0_%D0%86%D0%B2%D0%B0%D0%BD%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },            {
                "type": "street",
                "oldName": "Хуліана Грімау",
                "newName": "Віктора Мерзленка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%B7%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Чапаєва (Таромське)",
                "newName": "Болбочана",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%B1%D0%BE%D1%87%D0%B0%D0%BD_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Червоноармійська (Таромське)",
                "newName": "Футбольна"
            },
            {
                "type": "street",
                "oldName": "Червоних бійців",
                "newName": "Кобзарська"
            },
            {
                "type": "lane",
                "oldName": "Червоноармійський",
                "newName": "Червонокалиновий"
            },
            {
                "type": "street",
                "oldName": "Шелгунова",
                "newName": "Максима Дія",
                "link": {
                    "href": "https://www.gorod.dp.ua/history/isc/event_ru.php?event=32",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Щаденка",
                "newName": "Марії Грінченко",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D1%96%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9C%D0%B0%D1%80%D1%96%D1%8F_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Щорса (Таромське)",
                "newName": "Данили Будницького"
            },
            {
                "type": "street",
                "oldName": "Яшина",
                "newName": "Володимира Самодриги",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BC%D0%BE%D0%B4%D1%80%D0%B8%D0%B3%D0%B0_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Сахалінська",
                "newName": "Бахмутська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D1%85%D0%BC%D1%83%D1%82",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Біломорська",
                "newName": "Чорнобаївська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B1%D0%B0%D1%97%D0%B2%D0%BA%D0%B0_(%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "30-ї Іркутської дивізії",
                "newName": "Українських воїнів"
            },
            {
                "type": "street",
                "oldName": "Алтайська",
                "newName": "Чечелівська"
            },
            {
                "type": "street",
                "oldName": "Митищинська",
                "newName": "Польська"
            },
            {
                "type": "street",
                "oldName": "Орська",
                "newName": "Краматорська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D1%8C%D0%BA",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Шушинська",
                "newName": "Молочанська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%B0%D0%BD%D1%81%D1%8C%D0%BA",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Якутська",
                "newName": "Високопільська"
            }
        ]
    },
    "r68": {
        "oldAreaName": "Самарський",
        "newAreaName": "Самарський",
        "objects": [
            {
                "type": "street",
                "oldName": "60-річчя Жовтня",
                "newName": "Енергетиків"
            },
            {
                "type": "park",
                "oldName": "80-річчя Дніпропетровської області",
                "newName": "Сосновий"
            },
            {
                "type": "street",
                "oldName": "XXV партз’їзду",
                "newName": "Князя Костянтина Острозького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D1%8F%D0%BD%D1%82%D0%B8%D0%BD_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Бабушкіна",
                "newName": "В’язовий"
            },
            {
                "type": "lane",
                "oldName": "Бакуніна",
                "newName": "Ігренський",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B3%D1%80%D0%B5%D0%BD%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Барбюса",
                "newName": "Євгена Сердюкова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B4%D1%8E%D0%BA%D0%BE%D0%B2_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Булата",
                "newName": "Люблянська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%BB%D1%8F%D0%BD%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Ворошиловградська",
                "newName": "Пшенична"
            },
            {
                "type": "street",
                "oldName": "Галана",
                "newName": "Івана Піддубного",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D1%96%D0%B4%D0%B4%D1%83%D0%B1%D0%BD%D0%B8%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD_%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Героїв-панфіловців",
                "newName": "Героїв Чорнобиля",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9B%D1%96%D0%BA%D0%B2%D1%96%D0%B4%D0%B0%D1%82%D0%BE%D1%80%D0%B8_%D0%BD%D0%B0%D1%81%D0%BB%D1%96%D0%B4%D0%BA%D1%96%D0%B2_%D0%B0%D0%B2%D0%B0%D1%80%D1%96%D1%97_%D0%BD%D0%B0_%D0%A7%D0%BE%D1%80%D0%BD%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D1%96%D0%B9_%D0%90%D0%95%D0%A1",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Дундича",
                "newName": "Хорватська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D1%80%D0%B2%D0%B0%D1%82%D1%96%D1%8F",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Жовтнева",
                "newName": "Марії Приймаченко",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%96%D1%8F_%D0%9F%D1%80%D0%B8%D0%BC%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Кантемирівська",
                "newName": "Євгена Маланюка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%B0%D0%BD%D1%8E%D0%BA_%D0%84%D0%B2%D0%B3%D0%B5%D0%BD_%D0%A4%D0%B8%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Комісара Крилова",
                "newName": "Олександра Оцупа",
                "link": {
                    "href": "http://tsarselo.ru/yenciklopedija-carskogo-sela/istorija-carskogo-sela-v-licah/ocup-aleksandr-avdeevich-psevd-sergei-gornyi-1882-1948.html",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Крейсера Аврора",
                "newName": "Олександра Галича",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Кузнецова",
                "newName": "Тетяни Пати",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D1%82%D0%B0_%D0%A2%D0%B5%D1%82%D1%8F%D0%BD%D0%B0_%D0%AF%D0%BA%D0%B8%D0%BC%D1%96%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Лафарга",
                "newName": "Генерала Радієвського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D1%96%D1%94%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Маршала Гречка",
                "newName": "Сергія Кульчицького",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D1%8C%D1%87%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Маршала Жукова",
                "newName": "Героїв Дніпра",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%B7%D0%B0_%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE",
                    "type": 1
                }
            },
            {
                "type": "lane",
                "oldName": "Маршала Жукова",
                "newName": "Героїчний"
            },
            {
                "type": "street",
                "oldName": "Маршала Конєва",
                "newName": "Івана Виговського",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%92%D0%B8%D0%B3%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Постишева",
                "newName": "Олександра Серебрякова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D1%8F%D0%BA%D0%BE%D0%B2_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Петровського",
                "newName": "Андрія Сахарова",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B0%D1%85%D0%B0%D1%80%D0%BE%D0%B2_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Піонерська",
                "newName": "Омеляновича-Павленка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%9E%D0%BC%D0%B5%D0%BB%D1%8F%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-%D0%9F%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Піонерський",
                "newName": "Михайла Дідевича",
                "link": {
                    "href": "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B4%D0%B5%D0%B2%D0%B8%D1%87,_%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Таманська",
                "newName": "Василя Симоненка",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D0%BE%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Тевосяна",
                "newName": "Роксолани",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%BA%D1%81%D0%BE%D0%BB%D0%B0%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "lane",
                "oldName": "Фабріціуса",
                "newName": "Івана Купала",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%86%D0%B2%D0%B0%D0%BD_%D0%A5%D1%80%D0%B5%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D1%8C",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Фабріціуса",
                "newName": "Ярославни",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%84%D1%84%D1%80%D0%BE%D1%81%D0%B8%D0%BD%D1%96%D1%8F_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0",
                    "type": 0
                }
            },
            {
                "type": "street",
                "oldName": "Червонобогатирська",
                "newName": "Богатирська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D0%B8%D1%80",
                    "type": 3
                }
            },
            {
                "type": "lane",
                "oldName": "Червонопролетарський",
                "newName": "Порічковий"
            },
            {
                "type": "street",
                "oldName": "Домодєдовська",
                "newName": "Ворзельська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%B7%D0%B5%D0%BB%D1%8C",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Магаданська",
                "newName": "Волонтерська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE",
                    "type": 3
                }
            },
            {
                "type": "street",
                "oldName": "Псковська",
                "newName": "Авдіївська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D0%B4%D1%96%D1%97%D0%B2%D0%BA%D0%B0",
                    "type": 2
                }
            },
            {
                "type": "street",
                "oldName": "Шереметьєвська",
                "newName": "Бориспільська",
                "link": {
                    "href": "https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BF%D1%96%D0%BB%D1%8C",
                    "type": 2
                }
            }
        ]
    }
}
`;