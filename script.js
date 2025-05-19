document.addEventListener('DOMContentLoaded', () => {
    const memes = [
        { id: 1, title: "Бомбардиро Крокодило", category: "itl", description: "крокодил-бомбардировщик, часто изображаемый в движении, с выражением крайней сосредоточенности", year: 2025, source: "DC Comics", image: "https://static.dzeninfra.ru/s3/zen-lib/1.003.1/dzen-layout/lz5XeGt8fsa/1fRZ96370/c890c5wLs/JIixE_wtL8z0HOETKlAYoUENbs_mISi-x1k_3tCony2sEgfRkidvq4LsV9v-i4eAqqFZKVq5jLyJ0Yyr5lZ6uSGRrSekSGOc4QQYAgYsBZ1FOBb6qnhw295JSorJpb4FtD-m_eImVtLLVHPb3vc7KCbYiLSifHwteX3ZnrYLBrFM2JRu-TUTjLhJ3RMzlPXJTd2CX15lTZY77Gv2iDW3SbDu76ECyubuk4meste_DwC2PGRUigTwLZ0Fwa4O42qg4JSUXmWlE9iUgDHrW9w4RfU5rq_WxcUmu2wTxmhRF-H4amvZqg5qetdx6paDg4c0vsgscALgiKEZafF-Oks2BPwQOC7h0Z8ENADBH8ewwF01MU7_Ngk5JofYSxpgpWt1ZLZ_aeoKlvrPaXbev5OHdOpA5AA2ELDREdV9kmYTblTQHNymYTmjrKikMdcvtDzRaW3iR17JhU47NL-eVMl7lRzKc4F-4jZam6H2ltcf83yy0AxMFhiEcf3RfVomY354SHwoSvFV7_w4-FV_c3DM-e3hFhdC1RVWmygr-mSZv8kcyvNVYjoaymOdYvqD499Y_mjIzAIcfBVhQRl2pl_GWNRYaC4B2c_EIMhVm6-wTPXZld5L7kERNi84ayrUoYMVZIInXW6Wznp7MRYKDxsjhJpEqIACfGAVBRlF4tpzgixUoKRW4aHrtJjYMRsHrCQBASVu-3YpycY77ENSzB1zBZRKpwHOhn6uixHeIhcz78Au8NwsvozU6RFtVcKGM_Ks8BSs4mUdcwx4yCVvo_ToEYmJCj_2CQ0un5hrbvjtu-0ACjNFGo76CtMNnioD_18QAuxMXNYIdIFZ7Q0KIju2pCgs2BKl9W-4_MQl__vEJI0drfZ7tjllJp-oK_YcoZvpXO67CYbOHtoHaZ4eu6OLeAYMOJSm8HQhEXV9xr5_Ehx8eLCSxdVn1LzQjRfPgFh5ZekCa0Y9odqjOKdG0J1nkXAirxUGHs5-T-0KXovXe0hC_MyYhhT4uVWNRWI6g7KgfFhksskxS4x0eDXfT0iAHeGB3n-yuYU2C1iL6vChGy0c-tuBvhrqCneFuiIP-xfEgkgYnNqQiIUZGSl-BmMK1EzA8J7F8Zt8NMRxDwfM6E3h4XL_PkmZrhMIs3bkNfP10I43zQ4mGubHYQqWRydDZGoMVPjGgEA5xfWJkn6TpvDsYND-CUmvoOwkNVM7eKiplXlCz06p7V6_GNf68PXvXehCnwFOhvKKg82S-i8bU3y6iDh0ugCIAXXpQYKuC75kJIiUMmGJzyTErLUfuyhQjd0tVs_6DTUqO6QjDuRp-8kUhm_dtoJGIr857pbPJ1eQekDoXDbgeL0JUbXK8rMeIJzEnDYNDQdYlHABa2PYbPWNiZpvQsmZwhNcJ-ZcaTdZjK63xZ4OYsbbvZp694-v5HbUjAhK-DjZ5YUhmj5jPvhwgOhqnXHrmMycQfsDcJDBUSUSN9INsa7n2NuK3L3PyWTCv32Kdpr-u8ne3qMzV5juhKQEApTQlQ0FrY4C52IoSAxwbpHRT5jA5GkHQ3wkYUmZEsce-UWiE4hP5nyt6x2kLjOpkp7KUsOB-rpHm2OwtsAE5KYw_A0VYbnapj9ucLhAPGJ5IUtMVOABgzv4ABltqU67ysV15iOgM6Z4vecl-GbDFUqueqqbGaLeC5eXzLpkrMDOvNQdQfmhKqoPdpBIcPjWdXFrUEh8VZPDOIyF4T2Kr2JJReIbmDseXJkTIYB-19HOJk7e5w26qkffQ3RyQDScBuxkVUGVqRa-m-oYeHhs3qnF84j8HIH3S2Qcxf2FZp_qeUVik9hjXmTN42FgGnMhHho6_sdhBqqvB-PM5oi0xH64GPF5kRH6Huv25CQAbHb1iR8kFGDBn3MklE2xOVrL5vGBSsNI65LIyTvN-DZDaRpyMsqHNb6-y2vrHKbwDOgqlHCltYWF7pJfJiT8nFS-eXUjONhUKUO4", likes: 0, dislikes: 0 },
        { id: 2, title: "Тралалело Тралала", category: "itl", description: "трехногая акула в модных кроссовках Nike", year: 2025, source: "Reddit", image: "https://img.gazeta.ru/files3/50/20904050/upload-02-pic4_zoom-1500x1500-85716.jpg", likes: 0, dislikes: 0 },
        { id: 3, title: "Тунг Тунг Сахур", category: "itl", description: "крокодил-бомбардировщик, часто изображаемый в движении, с выражением крайней сосредоточенности", year: 2007, source: "YouTube", image: "https://i.ytimg.com/vi/6T0f7iUyiVM/maxresdefault.jpg", likes: 0, dislikes: 0 },
        { id: 4, title: "Лирили Ларила", category: "itl", description: "Кот, который жив и мёртв одновременно.", year: 2012, source: "Интернет", image: "https://i.ytimg.com/vi/RdCx5K3GWPY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVigoMA8=&rs=AOn4CLCkcs8zA04P20unZQRzL70JQb_aeg", likes: 0, dislikes: 0 },
        { id: 5, title: "Бобрито Бандито", category: "itl", description: "Дрейк одобряет и не одобряет.", year: 2015, source: "Instagram", image: "https://i.pinimg.com/736x/24/5d/e9/245de92bc210c6341a4b88bacadeeaad.jpg", likes: 0, dislikes: 0 },
        { id: 6, title: "Шпиониро Голубиро", category: "itl", description: "Кот в наушниках за компом.", year: 2019, source: "Twitter", image: "https://i.pinimg.com/736x/5e/ef/ef/5eefef5605a72662a413b1199e85adce.jpg", likes: 0, dislikes: 0 },
        { id: 7, title: "Окак", category: "animal", description: "Мем про NPC-персонажей.", year: 2018, source: "4chan", image: "https://forum.nextrp.ru/data/attachments/302/302447-83905c562b25006a88863d2ce0e0c81c.jpg", likes: 0, dislikes: 0 },
        { id: 8, title: "Четыре (шесть)", category: "anything", description: "Кот, который выглядит умнее всех.", year: 2014, source: "Reddit", image: "https://steamuserimages-a.akamaihd.net/ugc/1699531085984116757/AE595C7552B603CFEBA3C054FB8348ABFDDC64B7/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", likes: 0, dislikes: 0 },
        { id: 9, title: "Райан Гослинг", category: "rg", description: "Малыш танцует под музыку.", year: 1996, source: "YouTube", image: "https://i.pinimg.com/736x/b9/67/3e/b9673e65c1b857e6fea24ef082cf6563.jpg", likes: 0, dislikes: 0 },
        { id: 10, title: "ты щаслив?", category: "rg", description: "Лягушка Пепе грустит.", year: 2005, source: "4chan", image: "https://i.pinimg.com/736x/25/58/35/255835e397a1a4de4e280ddb185abebb.jpg", likes: 0, dislikes: 0 },
        { id: 11, title: "кис-кис-кис", category: "animal", description: "Лягушка Пепе грустит.", year: 2005, source: "4chan", image: "https://i.pinimg.com/736x/56/d9/66/56d9668626d91a87cd992dc66dc239a8.jpg", likes: 0, dislikes: 0 },
        { id: 12, title: "двойственность", category: "rg", description: "Лягушка Пепе грустит.", year: 2005, source: "4chan", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c875c128e3ed73e0c27142_66c875f1da212c5c4d32d1e7/scale_1200", likes: 0, dislikes: 0 }
    ];

    // Элементы DOM
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search');
    const navButtons = document.querySelectorAll('.nav-btn');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalYear = document.getElementById('modal-year');
    const modalSource = document.getElementById('modal-source');
    const closeModal = document.querySelector('.close');
    const easterEgg = document.getElementById('easter-egg');

    // Переменная для хранения текущей карточки
    let currentMemeElement = null;

    // Отображение всех мемов при загрузке
    function displayMemes(filter = 'all') {
        gallery.innerHTML = '';
        const filteredMemes = memes.filter(meme => filter === 'all' || meme.category === filter);
        
        filteredMemes.forEach(meme => {
            const memeDiv = document.createElement('div');
            memeDiv.classList.add('meme');
            memeDiv.dataset.id = meme.id;
            memeDiv.innerHTML = `
                <img src="${meme.image}" alt="${meme.title}">
                <p>${meme.title}</p>
            `;
            memeDiv.addEventListener('click', () => openModal(meme, memeDiv));
            gallery.appendChild(memeDiv);
        });
    }

    // Поиск с анимацией
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const activeCategory = document.querySelector('.nav-btn.active')?.dataset.category || 'all';
        const memeElements = document.querySelectorAll('.meme');

        memeElements.forEach(memeElement => {
            const meme = memes.find(m => m.id === parseInt(memeElement.dataset.id));
            if (!meme) return;
            
            if (activeCategory !== 'all' && meme.category !== activeCategory) {
                memeElement.classList.add('hidden');
                setTimeout(() => {
                    if (memeElement.classList.contains('hidden')) {
                        memeElement.style.display = 'none';
                    }
                }, 300);
                return;
            }

            const title = meme.title.toLowerCase();
            const description = meme.description.toLowerCase();
            const year = meme.year.toString().toLowerCase();
            const source = meme.source.toLowerCase();

            if (searchTerm === '' || 
                title.startsWith(searchTerm) || 
                description.includes(searchTerm) || 
                year.includes(searchTerm) || 
                source.includes(searchTerm)) {
                memeElement.classList.remove('hidden');
                memeElement.style.display = 'block';
            } else {
                memeElement.classList.add('hidden');
                setTimeout(() => {
                    if (memeElement.classList.contains('hidden')) {
                        memeElement.style.display = 'none';
                    }
                }, 300);
            }
        });
    });

    // Открытие модального окна
    function openModal(meme, memeElement) {
        modalImage.src = meme.image;
        modalImage.alt = meme.title;
        modalTitle.textContent = meme.title;
        modalDescription.textContent = `${meme.description}`;
        modalYear.textContent = `${meme.year}, ${meme.source}`;
        
        // Обновление счётчиков
        document.getElementById('like-count').textContent = meme.likes;
        document.getElementById('dislike-count').textContent = meme.dislikes;

        // Обработчик для кнопки лайка
        document.getElementById('like-btn').onclick = () => {
            meme.likes++;
            document.getElementById('like-count').textContent = meme.likes;
        };

        // Обработчик для кнопки дизлайка
        document.getElementById('dislike-btn').onclick = () => {
            meme.dislikes++;
            document.getElementById('dislike-count').textContent = meme.dislikes;
        };

        // Сохраняем текущую карточку и отключаем ховер
        currentMemeElement = memeElement;
        currentMemeElement.classList.add('no-hover');

        // Показываем модальное окно с анимацией
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10); // Небольшая задержка для запуска анимации
    }

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            // Восстанавливаем ховер для карточки
            if (currentMemeElement) {
                currentMemeElement.classList.remove('no-hover');
                currentMemeElement = null;
            }
        }, 300); // Соответствует длительности анимации
    });

    // Фильтрация по категориям
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayMemes(button.dataset.category);
            searchInput.value = '';
        });
    });

    // Пасхалка
    easterEgg.addEventListener('click', () => {
        alert('Вы нашли пасхалку! 🥚 Вот секретный мем!');
        const secretMeme = document.createElement('div');
        secretMeme.classList.add('meme');
        secretMeme.dataset.id = 'secret';
        secretMeme.innerHTML = `
            <img src="https://i.ytimg.com/vi/xox7QKywoW0/maxresdefault.jpg" alt="Секретный мем">
            <p>Секретный мем!</p>
        `;
        gallery.prepend(secretMeme);
        easterEgg.style.display = 'none';
    });

    // Инициализация
    displayMemes();
    navButtons[0].classList.add('active');
});