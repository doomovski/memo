document.addEventListener('DOMContentLoaded', () => {
    const memes = [
        { id: 1, title: "Бомбардиро Крокодило", category: "itl", description: "крокодил-бомбардировщик, часто изображаемый в движении, с выражением крайней сосредоточенности", year: 2025, source: "TikTok", image: "https://static.dzeninfra.ru/s3/zen-lib/1.003.1/dzen-layout/lz5XeGt8fsa/1fRZ96370/c890c5wLs/JIixE_wtL8z0HOETKlAYoUENbs_mISi-x1k_3tCony2sEgfRkidvq4LsV9v-i4eAqqFZKVq5jLyJ0Yyr5lZ6uSGRrSekSGOc4QQYAgYsBZ1FOBb6qnhw295JSorJpb4FtD-m_eImVtLLVHPb3vc7KCbYiLSifHwteX3ZnrYLBrFM2JRu-TUTjLhJ3RMzlPXJTd2CX15lTZY77Gv2iDW3SbDu76ECyubuk4meste_DwC2PGRUigTwLZ0Fwa4O42qg4JSUXmWlE9iUgDHrW9w4RfU5rq_WxcUmu2wTxmhRF-H4amvZqg5qetdx6paDg4c0vsgscALgiKEZafF-Oks2BPwQOC7h0Z8ENADBH8ewwF01MU7_Ngk5JofYSxpgpWt1ZLZ_aeoKlvrPaXbev5OHdOpA5AA2ELDREdV9kmYTblTQHNymYTmjrKikMdcvtDzRaW3iR17JhU47NL-eVMl7lRzKc4F-4jZam6H2ltcf83yy0AxMFhiEcf3RfVomY354SHwoSvFV7_w4-FV_c3DM-e3hFhdC1RVWmygr-mSZv8kcyvNVYjoaymOdYvqD499Y_mjIzAIcfBVhQRl2pl_GWNRYaC4B2c_EIMhVm6-wTPXZld5L7kERNi84ayrUoYMVZIInXW6Wznp7MRYKDxsjhJpEqIACfGAVBRlF4tpzgixUoKRW4aHrtJjYMRsHrCQBASVu-3YpycY77ENSzB1zBZRKpwHOhn6uixHeIhcz78Au8NwsvozU6RFtVcKGM_Ks8BSs4mUdcwx4yCVvo_ToEYmJCj_2CQ0un5hrbvjtu-0ACjNFGo76CtMNnioD_18QAuxMXNYIdIFZ7Q0KIju2pCgs2BKl9W-4_MQl__vEJI0drfZ7tjllJp-oK_YcoZvpXO67CYbOHtoHaZ4eu6OLeAYMOJSm8HQhEXV9xr5_Ehx8eLCSxdVn1LzQjRfPgFh5ZekCa0Y9odqjOKdG0J1nkXAirxUGHs5-T-0KXovXe0hC_MyYhhT4uVWNRWI6g7KgfFhksskxS4x0eDXfT0iAHeGB3n-yuYU2C1iL6vChGy0c-tuBvhrqCneFuiIP-xfEgkgYnNqQiIUZGSl-BmMK1EzA8J7F8Zt8NMRxDwfM6E3h4XL_PkmZrhMIs3bkNfP10I43zQ4mGubHYQqWRydDZGoMVPjGgEA5xfWJkn6TpvDsYND-CUmvoOwkNVM7eKiplXlCz06p7V6_GNf68PXvXehCnwFOhvKKg82S-i8bU3y6iDh0ugCIAXXpQYKuC75kJIiUMmGJzyTErLUfuyhQjd0tVs_6DTUqO6QjDuRp-8kUhm_dtoJGIr857pbPJ1eQekDoXDbgeL0JUbXK8rMeIJzEnDYNDQdYlHABa2PYbPWNiZpvQsmZwhNcJ-ZcaTdZjK63xZ4OYsbbvZp694-v5HbUjAhK-DjZ5YUhmj5jPvhwgOhqnXHrmMycQfsDcJDBUSUSN9INsa7n2NuK3L3PyWTCv32Kdpr-u8ne3qMzV5juhKQEApTQlQ0FrY4C52IoSAxwbpHRT5jA5GkHQ3wkYUmZEsce-UWiE4hP5nyt6x2kLjOpkp7KUsOB-rpHm2OwtsAE5KYw_A0VYbnapj9ucLhAPGJ5IUtMVOABgzv4ABltqU67ysV15iOgM6Z4vecl-GbDFUqueqqbGaLeC5eXzLpkrMDOvNQdQfmhKqoPdpBIcPjWdXFrUEh8VZPDOIyF4T2Kr2JJReIbmDseXJkTIYB-19HOJk7e5w26qkffQ3RyQDScBuxkVUGVqRa-m-oYeHhs3qnF84j8HIH3S2Qcxf2FZp_qeUVik9hjXmTN42FgGnMhHho6_sdhBqqvB-PM5oi0xH64GPF5kRH6Huv25CQAbHb1iR8kFGDBn3MklE2xOVrL5vGBSsNI65LIyTvN-DZDaRpyMsqHNb6-y2vrHKbwDOgqlHCltYWF7pJfJiT8nFS-eXUjONhUKUO4", likes: 0, dislikes: 0 },
        { id: 2, title: "Тралалело Тралала", category: "itl", description: "трехногая акула в модных кроссовках Nike", year: 2025, source: "TikTok", image: "https://img.gazeta.ru/files3/50/20904050/upload-02-pic4_zoom-1500x1500-85716.jpg", likes: 0, dislikes: 0 },
        { id: 3, title: "Тунг Тунг Сахур", category: "itl", description: "деревянная дубинка с огромными глазами и битой в руке", year: 2025, source: "YouTube", image: "https://i.ytimg.com/vi/6T0f7iUyiVM/maxresdefault.jpg", likes: 0, dislikes: 0 },
        { id: 4, title: "Лирили Ларила", category: "itl", description: "Кот, который жив и мёртв одновременно.", year: 2025, source: "TikTok", image: "https://i.ytimg.com/vi/RdCx5K3GWPY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVigoMA8=&rs=AOn4CLCkcs8zA04P20unZQRzL70JQb_aeg", likes: 0, dislikes: 0 },
        { id: 5, title: "Бобрито Бандито", category: "itl", description: "Дрейк одобряет и не одобряет.", yeПar: 2025, source: "TikTok", image: "https://i.pinimg.com/736x/24/5d/e9/245de92bc210c6341a4b88bacadeeaad.jpg", likes: 0, dislikes: 0 },
        { id: 6, title: "Шпиониро Голубиро", category: "itl", description: "Кот в наушниках за компом.", year: 2025, source: "TikTok", image: "https://i.pinimg.com/736x/5e/ef/ef/5eefef5605a72662a413b1199e85adce.jpg", likes: 0, dislikes: 0 },
        { id: 7, title: "Окак", category: "animal", description: "черный кот в капюшоне стал символом растерянности", year: 2025, source: "4chan", image: "https://forum.nextrp.ru/data/attachments/302/302447-83905c562b25006a88863d2ce0e0c81c.jpg", likes: 0, dislikes: 0 },
        { id: 8, title: "Четыре (шесть)", category: "anything", description: "Кот, который выглядит умнее всех.", year: 2022, source: "VK", image: "https://steamuserimages-a.akamaihd.net/ugc/1699531085984116757/AE595C7552B603CFEBA3C054FB8348ABFDDC64B7/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", likes: 0, dislikes: 0 },
        { id: 9, title: "Райан Гослинг", category: "rg", description: "Малыш танцует под музыку.", year: 2020, source: "YouTube", image: "https://i.pinimg.com/736x/b9/67/3e/b9673e65c1b857e6fea24ef082cf6563.jpg", likes: 0, dislikes: 0 },
        { id: 10, title: "Ты щаслив?", category: "rg", description: "Лягушка Пепе грустит.", year: 2020, source: "VK", image: "https://i.pinimg.com/736x/25/58/35/255835e397a1a4de4e280ddb185abebb.jpg", likes: 0, dislikes: 0 },
        { id: 11, title: "кис-кис-кис", category: "animal", description: "Лягушка Пепе грустит.", year: 2016, source: "VK", image: "https://i.pinimg.com/736x/56/d9/66/56d9668626d91a87cd992dc66dc239a8.jpg", likes: 0, dislikes: 0 },
        { id: 12, title: "Двойственность", category: "rg", description: "Лягушка Пепе грустит.", year: 2020, source: "4chan", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c875c128e3ed73e0c27142_66c875f1da212c5c4d32d1e7/scale_1200", likes: 0, dislikes: 0 }
    ];

    // Элементы DOM
    const gallery = document.getElementById('gallery');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('search');
    const navButtons = document.querySelectorAll('.nav-btn');
    const createBtn = document.querySelector('.create-btn');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalYear = document.getElementById('modal-year');
    const closeModal = document.querySelector('.close');
    const easterEgg = document.getElementById('easter-egg');
    const memeGeneratorSection = document.getElementById('meme-generator');
    const imageUploadInput = document.getElementById('image-upload');
    const topTextInput = document.getElementById('top-text');
    const bottomTextInput = document.getElementById('bottom-text');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const sourceInput = document.getElementById('source');
    const yearInput = document.getElementById('year');
    const memeCanvas = document.getElementById('meme-canvas');
    const generateMemeBtn = document.getElementById('generate-meme');
    const downloadMemeBtn = document.getElementById('download-meme');
    const saveMemeBtn = document.getElementById('save-meme');
    const canvasContext = memeCanvas.getContext('2d');
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header')

    let uploadedImageSrc = null;

    // Обработчик бургер-меню
    burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (nav.classList.contains('active')) {
        // Закрываем меню
        header.classList.remove('active');
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Возвращаем возможность скролла
    } else {
        // Открываем меню
        nav.style.display = 'flex';
        setTimeout(() => {
            header.classList.add('active');
            nav.classList.add('active');
            burgerMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Блокируем скролл при открытом меню
        }, 10);
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('nav .nav-btn, nav .create-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        header.classList.remove('active');
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            nav.style.display = 'none';
        }, 300);
    });
});


    // Обработчик кнопки "Создать мем"
    createBtn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        createBtn.classList.add('active');
        displayMemes('generator');
        searchInput.value = '';
        if (burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Загрузка изображения
    imageUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImageSrc = e.target.result;
                drawMeme(uploadedImageSrc, topTextInput.value.toUpperCase(), bottomTextInput.value.toUpperCase());
            };
            reader.onerror = () => {
                alert('Ошибка при чтении файла изображения.');
            };
            reader.readAsDataURL(file);
        }
    });

    // Отрисовка мема
    function drawMeme(imageSrc, topText, bottomText) {
        if (!imageSrc) {
            alert('Пожалуйста, загрузите изображение!');
            return;
        }
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const maxSize = 600;
            let width = img.width;
            let height = img.height;
            const scale = Math.min(maxSize / width, maxSize / height, 1);
            width *= scale;
            height *= scale;
            memeCanvas.width = width;
            memeCanvas.height = height;
            canvasContext.drawImage(img, 0, 0, width, height);
            canvasContext.font = `bold ${Math.floor(width / 15)}px Arial`;
            canvasContext.fillStyle = 'white';
            canvasContext.strokeStyle = 'black';
            canvasContext.lineWidth = Math.floor(width / 100);
            canvasContext.textAlign = 'center';
            canvasContext.strokeText(topText, width / 2, 50);
            canvasContext.fillText(topText, width / 2, 50);
            canvasContext.strokeText(bottomText, width / 2, height - 20);
            canvasContext.fillText(bottomText, width / 2, height - 20);
            downloadMemeBtn.style.display = 'inline-block';
            downloadMemeBtn.href = memeCanvas.toDataURL('image/png');
            downloadMemeBtn.download = 'meme.png';
        };
        img.onerror = () => {
            alert('Ошибка загрузки изображения. Проверьте URL или выберите другое изображение.');
        };
        img.src = imageSrc;
    }

    // Предотвращение навигации по data URL
    downloadMemeBtn.addEventListener('click', (e) => {
        if (!downloadMemeBtn.href || downloadMemeBtn.href === '#') {
            e.preventDefault();
            alert('Сначала сгенерируйте мем!');
        }
    });

    // Отображение мемов
    function displayMemes(filter = 'all') {
        gallery.innerHTML = '';
        memeGeneratorSection.style.display = filter === 'generator' ? 'block' : 'none';
        searchBar.style.display = filter === 'generator' ? 'none' : 'flex';
        gallery.style.display = filter === 'generator' ? 'none' : 'grid';
        if (filter !== 'generator ADB') {
            memes.filter(m => filter === 'all' || m.category === filter)
                .forEach(meme => {
                    const div = document.createElement('div');
                    div.classList.add('meme');
                    div.dataset.id = meme.id;
                    div.innerHTML = `<img src="${meme.image}" alt="${meme.title}"><p>${meme.title}</p>`;
                    div.addEventListener('click', () => openModal(meme, div));
                    gallery.appendChild(div);
                });
        }
    }

    // Поиск
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.trim().toLowerCase();
        const active = document.querySelector('.nav-btn.active')?.dataset.category || 'all';
        document.querySelectorAll('.meme').forEach(el => {
            const m = memes.find(x => x.id == el.dataset.id);
            if (!m) return;
            const match = (term === '' || m.title.toLowerCase().startsWith(term) || m.description.toLowerCase().includes(term) || m.year.toString().includes(term) || m.source.toLowerCase().includes(term))
                        && (active === 'all' || m.category === active);
            el.classList.toggle('hidden', !match);
            setTimeout(() => {
                if (el.classList.contains('hidden')) el.style.display = 'none';
                else el.style.display = 'block';
            }, 300);
        });
    });

    // Навигационные кнопки
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayMemes(btn.dataset.category);
            searchInput.value = '';
            if (burgerMenu.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });

    // Генерация мема
    generateMemeBtn.addEventListener('click', () => {
        drawMeme(uploadedImageSrc, topTextInput.value.toUpperCase(), bottomTextInput.value.toUpperCase());
        searchBar.style.display = 'none';
    });

    // Сохранение мема
    saveMemeBtn.addEventListener('click', () => {
        if (!uploadedImageSrc) {
            alert('Пожалуйста, загрузите изображение!');
            return;
        }
        const title = titleInput.value.trim() || 'Мой мем';
        const description = descriptionInput.value.trim() || 'Сгенерировано';
        const source = sourceInput.value.trim() || 'Генератор';
        const year = parseInt(yearInput.value) || new Date().getFullYear();
        memes.push({
            id: memes.length + 1,
            title: title,
            category: 'my',
            description: description,
            year: year,
            source: source,
            image: memeCanvas.toDataURL(),
            likes: 0,
            dislikes: 0
        });
        const activeCategory = document.querySelector('.nav-btn.active')?.dataset.category || 'all';
        displayMemes(activeCategory);
        alert('Мем сохранён!');
        // Очистка полей после сохранения
        titleInput.value = '';
        descriptionInput.value = '';
        sourceInput.value = '';
        yearInput.value = '';
        topTextInput.value = '';
        bottomTextInput.value = '';
        imageUploadInput.value = '';
        memeCanvas.width = 0; // Очистка канваса
        downloadMemeBtn.style.display = 'none';
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    // Открытие модального окна
    function openModal(meme, elem) {
        modalImage.src = meme.image;
        modalTitle.textContent = meme.title;
        modalDescription.textContent = meme.description;
        modalYear.textContent = `${meme.year}, ${meme.source}`;
        document.getElementById('like-count').textContent = meme.likes;
        document.getElementById('dislike-count').textContent = meme.dislikes;
        document.getElementById('like-btn').onclick = () => document.getElementById('like-count').textContent = ++meme.likes;
        document.getElementById('dislike-btn').onclick = () => document.getElementById('dislike-count').textContent = ++meme.dislikes;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    // Пасхалка
    easterEgg.addEventListener('click', () => {
        alert('Пасхалка!');
        const secret = document.createElement('div');
        secret.classList.add('meme');
        secret.dataset.id = 'secret';
        secret.innerHTML = `<img src="https://i.ytimg.com/vi/xox7QKywoW0/maxresdefault.jpg"><p>Секрет!</p>`;
        gallery.prepend(secret);
        easterEgg.style.display = 'none';
    });

    // Инициализация
    displayMemes();
    navButtons[0].classList.add('active');
});