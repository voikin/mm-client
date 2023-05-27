import { useQuery } from 'react-query'
import RationService from '../../services/RationService'
import styles from './Feed.module.scss'
import { useAuthStore } from '../../stores/authStore'
import { HiArrowPath } from 'react-icons/hi2'
import Ration from './Ration/Ration'
import { IRation } from '../../models/IRation'
import { useState } from 'react'
import ModalRation from './ModalRation/ModalRation'

export default function Feed() {
	const { isAuth } = useAuthStore()
	const fetchFeedQuery = useQuery('feed', RationService.fetchFeed, {
		onSuccess: (data) => {
			console.log(data)
		},
	})
	const rations = [
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

	const [selectedRation, setSelectedRation] = useState<IRation | null>(null)

	const openModal = (ration: IRation) => {
		setSelectedRation(ration)
	}

	const closeModal = () => {
		setSelectedRation(null)
	}

	if (!isAuth)
		return <div className={styles.auth_error}>Вы не авторизированны</div>
	return (
		<>
			{fetchFeedQuery.isLoading ? (
				<div className='w-full h-full grid place-content-center'>
					<HiArrowPath className='animate-spin w-20 h-20 text-primary' />
				</div>
			) : (
				<div className={styles.feed}>
					{rations.map((ration) => (
						<Ration ration={ration} onClick={() => openModal(ration)} />
					))}
				</div>
			)}
			{selectedRation && (
				<ModalRation ration={selectedRation} onClose={closeModal} />
			)}
		</>
	)
}
