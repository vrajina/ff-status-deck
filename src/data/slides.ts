export type Theme = "white" | "sand" | "red";

export interface Slide {
  id: string;
  theme: Theme;
  kicker: string;
  title: string;
  lead?: string;
  items?: string[];
  links?: { label: string; href: string }[];
  extras?: string[];
  status: string;
}

export const slides: Slide[] = [
  {
    id: "cover",
    theme: "sand",
    kicker: "статус проекта",
    title: "Фундамент есть\nКупить ещё нельзя",
    lead: "Живой стенд, админка и черновой каталог. Данные пока не из 1С. Сейчас карточка, потом корзина и касса.",
    status: "статус витрины  |  finn flare  |  2026",
  },
  {
    id: "stand",
    theme: "white",
    kicker: "можно смотреть",
    title: "Дев-стенд уже живой",
    links: [
      { label: "Витрина", href: "https://newstage.finn-flare.ru/" },
      { label: "Админка", href: "https://newstage.finn-flare.ru/admin/" },
    ],
    extras: [
      "Все сервисы развёрнуты и связаны.",
      "В админке десятки рабочих инструментов для контента.",
    ],
    status: "стенд  |  finn flare  |  2026",
  },
  {
    id: "now",
    theme: "sand",
    kicker: "сейчас",
    title: "Что уже сделано",
    items: [
      "Структура проекта описана, данные в коде заложены.",
      "Товары частично заехали из фида: название, артикул, цена, пол, цвет, сезон, состав.",
      "Есть города, салоны, склады и остатки.",
      "Каталог на минималках: листинг и фильтры.",
      "Под капотом: карточки, наличие в салонах, избранное, корзина с синхронизацией между устройствами.",
    ],
    status: "что уже есть  |  finn flare  |  2026",
  },
  {
    id: "auth",
    theme: "white",
    kicker: "вход",
    title: "Кабинет есть\nНастоящего входа ещё нет",
    items: [
      "Можно заполнить профиль.",
      "SMS пока нет — подходит любой код.",
      "Дальше прикрутим Сбер ID.",
    ],
    status: "авторизация  |  finn flare  |  2026",
  },
  {
    id: "problems",
    theme: "white",
    kicker: "проблемы",
    title: "Не хватает фронтенда",
    items: [
      "Через Cursor не выходит нужный уровень качества.",
      "Решение: нанять мидла фронтенда под проект.",
      "150 000 ₽ в месяц на руки, самозанятый.",
      "Нет интеграции с нашей ERP (1С).",
      "Данные берём из разных источников: фиды для внешних сервисов, а не из единой системы.",
    ],
    status: "ограничения  |  finn flare  |  2026",
  },
  {
    id: "wip",
    theme: "sand",
    kicker: "в работе",
    title: "Сейчас карточка товара",
    items: [
      "Полная карточка: бэкенд и фронт.",
      "Отзывы и вопросы рядом с вещью.",
    ],
    status: "в работе  |  finn flare  |  2026",
  },
  {
    id: "next",
    theme: "white",
    kicker: "дальше",
    title: "От корзины к своему контуру",
    items: [
      "Корзина на сайте.",
      "Оформление заказа: свой чекаут и Яндекс Чекаут.",
      "Интеграция с 1С.",
      "Интеграция с Retail Rocket и Sailplay.",
      "Разворачивание проекта на отдельном хостинге.",
    ],
    status: "что дальше  |  finn flare  |  2026",
  },
  {
    id: "close",
    theme: "sand",
    kicker: "коротко",
    title: "Сначала одна покупка",
    lead: "Фундамент и черновой каталог есть. Купить ещё нельзя. Данные пока не из 1С. Сейчас карточка, потом корзина и касса.",
    links: [
      { label: "newstage.finn-flare.ru", href: "https://newstage.finn-flare.ru/" },
      { label: "Админка", href: "https://newstage.finn-flare.ru/admin/" },
    ],
    status: "новая витрина  |  finn flare  |  2026",
  },
];
