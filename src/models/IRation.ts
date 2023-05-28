interface IIngredient {
	name: string
	weight: number
}

export interface IRecipe {
	name: string
	weight: number
	calories: number
	img: string
	url: string
	products: IIngredient[]
}

export interface IRation {
	id?: number
	date?: string
	monday: IRecipe[]
	tuesday: IRecipe[]
	wednesday: IRecipe[]
	thursday: IRecipe[]
	friday: IRecipe[]
	saturday: IRecipe[]
	sunday: IRecipe[]
}

export const rationsMock = [
	{
		monday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		tuesday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		wednesday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		thursday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		friday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		saturday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		sunday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
	},
	{
		monday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		tuesday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		wednesday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		thursday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		friday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		saturday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
		sunday: [
			{
				name: 'Кулич пасхальный от Кухня наизнанку',
				weight: '1680',
				calories: '5044',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220648/9e8b41832a1c17cdeaac97f8a5fda0e9.jpg',
				products: [
					['Цукаты', '50'],
					['Изюм кишмиш', '50'],
					['Маргарин подсолнечный', '130'],
					['Йогурт греческий 10%', '75'],
					['Ванильный сахар', '8'],
					['Сахар-песок', '150'],
				],
			},
			{
				name: 'Овсяноблин',
				weight: '112',
				calories: '221',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/219346/7bc5c9b39e7486d7fd9c3f55922032ef.jpg',
				products: [
					['Яйцо куриное', '55'],
					['Мука овсяная', '20'],
					['Молоко 2,5% ', '30'],
					['Масло подсолнечное', '5'],
					['Соль поваренная пищевая', '2'],
				],
			},
			{
				name: 'А-ля лобио',
				weight: '571',
				calories: '847',
				photo:
					'https://daily-menu.ru/public/modules/dailymenu/dailymenurecipes/220390/ed329aa3f02a983b568d7a7ffb770877.jpg',
				products: [
					['Фасоль красная, консервированная', '425'],
					['Масло подсолнечное', '34'],
					['Сахар-песок', '7'],
					['Уксус 6%', '45'],
					['Орех грецкий', '10'],
					['Лук репчатый', '50'],
				],
			},
		],
	},
] as IRation[]
