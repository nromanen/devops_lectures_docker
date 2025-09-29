import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers, Zap, Package, ArrowRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Що таке Multi-stage builds?",
      subtitle: "Оптимізація образів через багатоетапну збірку",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Multi-stage Builds</h3>
            <p className="text-center text-xl">
              Створення легких production образів через декілька етапів збірки
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
            <h4 className="text-xl font-bold text-yellow-800 mb-4">😟 Проблема без multi-stage</h4>
            <div className="space-y-3">
              <p className="text-gray-800">
                Щоб зібрати додаток потрібні: компілятори, build tools, dev залежності...
              </p>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800 mb-2">Приклад Node.js додатку:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Node.js + npm</li>
                  <li>• Dev залежності (webpack, babel, typescript)</li>
                  <li>• Build tools</li>
                  <li>• Source файли</li>
                  <li>• <strong className="text-red-600">Результат: образ ~1 GB 😱</strong></li>
                </ul>
              </div>
              <p className="text-gray-800 font-semibold">
                Але для запуску потрібен тільки збудований код + runtime!
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">✅ Рішення: Multi-stage builds</h4>
            <div className="space-y-4">
              <p className="text-gray-800 text-lg">
                <strong>Ідея:</strong> Використовувати кілька FROM в одному Dockerfile
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-2">Етап 1: Build</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Встановити всі інструменти</li>
                    <li>• Зібрати додаток</li>
                    <li>• Скомпілювати код</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded shadow border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-2">Етап 2: Production</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Взяти ТІЛЬКИ готовий код</li>
                    <li>• Мінімальний runtime</li>
                    <li>• Без dev залежностей</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">Результат: ~1 GB → ~50-200 MB 🎉</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Візуалізація процесу</h4>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="bg-blue-100 border-4 border-blue-500 rounded-lg p-6 mb-2">
                  <Package className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-800">Build Stage</p>
                  <p className="text-sm text-gray-600 mt-2">Всі інструменти<br/>~1 GB</p>
                </div>
              </div>
              
              <div className="flex-shrink-0 mx-4">
                <ArrowRight className="w-12 h-12 text-gray-400" />
              </div>
              
              <div className="text-center flex-1">
                <div className="bg-green-100 border-4 border-green-500 rounded-lg p-6 mb-2">
                  <Zap className="w-16 h-16 text-green-600 mx-auto mb-2" />
                  <p className="font-bold text-green-800">Production Stage</p>
                  <p className="text-sm text-gray-600 mt-2">Тільки результат<br/>~100 MB</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4 text-sm">
              Копіюємо тільки потрібні файли з першого етапу в другий
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Ключова ідея:</strong> Все що потрібно для збірки залишається в build stage. 
              В фінальний образ потрапляє тільки мінімально необхідне для запуску!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Синтаксис Multi-stage builds",
      subtitle: "Кілька FROM в одному Dockerfile",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">Як це працює?</h3>
            <p className="text-center text-gray-700 text-lg">
              Кожна інструкція FROM починає новий етап збірки
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Базова структура</h4>
            <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-3">
              <div>
                <p className="text-yellow-300"># ========== Етап 1: Build ==========</p>
                <p className="text-green-400">FROM node:18 AS builder</p>
                <p>WORKDIR /app</p>
                <p>COPY package*.json ./</p>
                <p>RUN npm install</p>
                <p>COPY . .</p>
                <p>RUN npm run build</p>
              </div>
              
              <div className="border-t-2 border-gray-600 pt-3">
                <p className="text-yellow-300"># ========== Етап 2: Production ==========</p>
                <p className="text-green-400">FROM node:18-alpine</p>
                <p>WORKDIR /app</p>
                <p className="text-purple-400">COPY --from=builder /app/dist ./dist</p>
                <p>COPY package*.json ./</p>
                <p>RUN npm install --production</p>
                <p>CMD ["node", "dist/index.js"]</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Іменування етапів</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-blue-600 mb-1">FROM node:18 AS builder</p>
                  <p className="text-xs text-gray-600">Даємо ім'я етапу через AS</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-blue-600 mb-1">FROM node:18 AS dependencies</p>
                  <p className="text-xs text-gray-600">Можна використовувати будь-яке ім'я</p>
                </div>

                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <p className="text-xs text-green-800">
                    <strong>Порада:</strong> Використовуйте зрозумілі імена: builder, deps, prod
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h4 className="text-lg font-bold text-purple-800 mb-4">Копіювання між етапами</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-purple-600 mb-1">COPY --from=builder /app/dist .</p>
                  <p className="text-xs text-gray-600">Копіюємо з іменованого етапу</p>
                </div>
                
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-purple-600 mb-1">COPY --from=0 /app/build .</p>
                  <p className="text-xs text-gray-600">Або за номером (0, 1, 2...)</p>
                </div>

                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                  <p className="text-xs text-orange-800">
                    <strong>Важливо:</strong> --from вказує з якого етапу копіювати
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Що відбувається?</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-semibold mb-1">1️⃣ Docker збирає перший етап (builder)</p>
                <p className="text-sm">Встановлює залежності, компілює код</p>
              </div>
              
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-semibold mb-1">2️⃣ Docker починає другий етап (production)</p>
                <p className="text-sm">Новий чистий образ з alpine</p>
              </div>
              
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-semibold mb-1">3️⃣ Копіює тільки потрібні файли з builder</p>
                <p className="text-sm">COPY --from=builder бере файли з першого етапу</p>
              </div>
              
              <div className="bg-white bg-opacity-20 p-3 rounded">
                <p className="font-semibold mb-1">4️⃣ Перший етап викидається!</p>
                <p className="text-sm">В фінальному образі тільки другий етап</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">⚡ Ключова перевага</h4>
            <p className="text-sm text-gray-800">
              Всі важкі інструменти (компілятори, dev залежності) залишаються в build stage 
              і НЕ потрапляють у фінальний образ!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Приклад: Node.js додаток",
      subtitle: "До і після multi-stage",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-800 text-center mb-2">Практичний приклад</h3>
            <p className="text-center text-gray-700">Node.js + TypeScript + Webpack</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
              <h4 className="text-xl font-bold text-red-800 mb-4">❌ Без multi-stage</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p>FROM node:18</p>
                <p>WORKDIR /app</p>
                <p>COPY package*.json ./</p>
                <p>RUN npm install</p>
                <p>COPY . .</p>
                <p>RUN npm run build</p>
                <p>CMD ["node", "dist/index.js"]</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                  <p className="text-sm font-bold text-red-800">Розмір: ~950 MB</p>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Повний Node.js image</p>
                  <p>• Dev залежності (webpack, typescript)</p>
                  <p>• Source код TypeScript</p>
                  <p>• Build tools</p>
                  <p>• node_modules (всі пакети)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">✅ З multi-stage</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p className="text-yellow-300"># Build stage</p>
                <p>FROM node:18 AS builder</p>
                <p>WORKDIR /app</p>
                <p>COPY package*.json ./</p>
                <p>RUN npm install</p>
                <p>COPY . .</p>
                <p>RUN npm run build</p>
                
                <p className="text-yellow-300 mt-2"># Production stage</p>
                <p>FROM node:18-alpine</p>
                <p>WORKDIR /app</p>
                <p className="text-purple-400">COPY --from=builder /app/dist .</p>
                <p>COPY package*.json ./</p>
                <p>RUN npm install --production</p>
                <p>CMD ["node", "index.js"]</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <p className="text-sm font-bold text-green-800">Розмір: ~150 MB</p>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>✅ Alpine Node.js (малий)</p>
                  <p>✅ Тільки production залежності</p>
                  <p>✅ Тільки зібраний JS код</p>
                  <p>❌ Без TypeScript source</p>
                  <p>❌ Без dev залежностей</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">📊 Порівняння</h4>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-5xl font-bold mb-2">950 MB</p>
                <p className="text-lg">Без multi-stage</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-16 h-16" />
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">150 MB</p>
                <p className="text-lg">З multi-stage</p>
              </div>
            </div>
            <div className="mt-6 bg-white bg-opacity-20 p-4 rounded-lg">
              <p className="text-3xl font-bold">Економія: 84% 🎉</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Що змінилося?</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-semibold text-gray-800 mb-2">Build stage:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• node:18 (повний образ)</li>
                  <li>• npm install (всі залежності)</li>
                  <li>• npm run build (компіляція TS)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800 mb-2">Production stage:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• node:18-alpine (легкий)</li>
                  <li>• npm install --production</li>
                  <li>• Тільки dist/ папка</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Результат:</strong> Швидший deploy, менше місця на сервері, 
              швидший pull образу з registry!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Приклад: React додаток",
      subtitle: "Build + Nginx для статичних файлів",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-2">React + Nginx</h3>
            <p className="text-center text-gray-700">Ідеальний приклад multi-stage</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Повний Dockerfile</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-sm space-y-2">
              <div>
                <p className="text-yellow-300"># ========== Stage 1: Build ==========</p>
                <p className="text-green-400">FROM node:18-alpine AS build</p>
                <p>WORKDIR /app</p>
                <p className="text-blue-400"># Копіюємо package files</p>
                <p>COPY package*.json ./</p>
                <p className="text-blue-400"># Встановлюємо залежності</p>
                <p>RUN npm ci --only=production</p>
                <p className="text-blue-400"># Копіюємо source код</p>
                <p>COPY . .</p>
                <p className="text-blue-400"># Збираємо production build</p>
                <p>RUN npm run build</p>
              </div>

              <div className="border-t-2 border-gray-600 pt-3">
                <p className="text-yellow-300"># ========== Stage 2: Nginx ==========</p>
                <p className="text-green-400">FROM nginx:alpine</p>
                <p className="text-blue-400"># Видаляємо дефолтні файли nginx</p>
                <p>RUN rm -rf /usr/share/nginx/html/*</p>
                <p className="text-blue-400"># Копіюємо build з попереднього етапу</p>
                <p className="text-purple-400">COPY --from=build /app/build /usr/share/nginx/html</p>
                <p className="text-blue-400"># Копіюємо конфіг nginx (опціонально)</p>
                <p>COPY nginx.conf /etc/nginx/nginx.conf</p>
                <p className="text-blue-400"># Порт</p>
                <p>EXPOSE 80</p>
                <p className="text-blue-400"># Запуск nginx</p>
                <p>CMD ["nginx", "-g", "daemon off;"]</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Stage 1: Build</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-gray-800 mb-2">Що робить:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Встановлює Node.js</li>
                    <li>• npm install всіх залежностей</li>
                    <li>• Компілює React (Webpack/Vite)</li>
                    <li>• Створює /build з HTML/CSS/JS</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-3 rounded text-sm">
                  <p className="text-blue-800"><strong>Розмір етапу:</strong> ~800 MB</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h4 className="text-lg font-bold text-green-800 mb-4">Stage 2: Nginx</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-bold text-gray-800 mb-2">Що робить:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Бере легкий nginx:alpine</li>
                    <li>• Копіює ТІЛЬКИ /build папку</li>
                    <li>• Налаштовує nginx</li>
                    <li>• Готово для production!</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-3 rounded text-sm">
                  <p className="text-green-800"><strong>Фінальний розмір:</strong> ~25 MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">📊 Неймовірна економія!</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-4xl font-bold mb-2">~800 MB</p>
                <p className="text-sm">З Node.js</p>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-12 h-12" />
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="text-4xl font-bold mb-2">~25 MB</p>
                <p className="text-sm">Тільки nginx + статика</p>
              </div>
            </div>
            <div className="mt-4 bg-white bg-opacity-20 p-3 rounded text-center">
              <p className="text-2xl font-bold">Зменшення на 97%! 🚀</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Чому це працює так добре?</h4>
            <div className="space-y-3 text-sm text-gray-800">
              <p>
                <strong>Ключ:</strong> React після build це просто статичні HTML/CSS/JS файли!
              </p>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-red-600 mb-2">❌ Не потрібно:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Node.js runtime</li>
                    <li>• npm, webpack</li>
                    <li>• React dev tools</li>
                    <li>• Source код .jsx</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-600 mb-2">✅ Потрібно тільки:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Nginx (веб-сервер)</li>
                    <li>• Статичні файли</li>
                    <li>• index.html</li>
                    <li>• bundle.js, style.css</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">💡 Використання</h4>
            <div className="space-y-2 text-sm text-gray-800">
              <div className="bg-white p-3 rounded font-mono text-xs">
                <p className="text-gray-600"># Збудувати образ</p>
                <p>docker build -t my-react-app .</p>
                
                <p className="text-gray-600 mt-2"># Запустити</p>
                <p>docker run -p 80:80 my-react-app</p>
              </div>
              <p className="mt-2">Тепер ваш React додаток доступний на http://localhost 🎉</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Інші приклади: Python та Go",
      subtitle: "Multi-stage для різних мов",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-800 text-center">Multi-stage для інших мов</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-800 mb-4">🐍 Python</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p className="text-yellow-300"># Build stage</p>
                <p>FROM python:3.11 AS builder</p>
                <p>WORKDIR /app</p>
                <p>COPY requirements.txt .</p>
                <p>RUN pip install --user -r requirements.txt</p>
                
                <p className="text-yellow-300 mt-3"># Production stage</p>
                <p>FROM python:3.11-slim</p>
                <p>WORKDIR /app</p>
                <p className="text-purple-400">COPY --from=builder /root/.local /root/.local</p>
                <p>COPY . .</p>
                <p>ENV PATH=/root/.local/bin:$PATH</p>
                <p>CMD ["python", "app.py"]</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="text-sm font-bold text-yellow-800 mb-1">Економія:</p>
                  <p className="text-xs text-gray-700">~950 MB → ~180 MB</p>
                </div>
                <div className="text-xs text-gray-700">
                  <p>• python:3.11 → python:3.11-slim</p>
                  <p>• Пакети встановлені локально</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-800 mb-4">🔷 Go (Golang)</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p className="text-yellow-300"># Build stage</p>
                <p>FROM golang:1.21 AS builder</p>
                <p>WORKDIR /app</p>
                <p>COPY go.* ./</p>
                <p>RUN go mod download</p>
                <p>COPY . .</p>
                <p>RUN CGO_ENABLED=0 go build -o app</p>
                
                <p className="text-yellow-300 mt-3"># Production stage</p>
                <p>FROM alpine:latest</p>
                <p>WORKDIR /app</p>
                <p className="text-purple-400">COPY --from=builder /app/app .</p>
                <p>CMD ["./app"]</p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm font-bold text-blue-800 mb-1">Економія:</p>
                  <p className="text-xs text-gray-700">~800 MB → ~10 MB! 🤯</p>
                </div>
                <div className="text-xs text-gray-700">
                  <p>• Go компілює в бінарник</p>
                  <p>• Не потрібен runtime!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">Java + Spring Boot</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
              <p className="text-yellow-300"># Build stage</p>
              <p>FROM maven:3.9-eclipse-temurin-17 AS builder</p>
              <p>WORKDIR /app</p>
              <p>COPY pom.xml .</p>
              <p>RUN mvn dependency:go-offline</p>
              <p>COPY src ./src</p>
              <p>RUN mvn package -DskipTests</p>
              
              <p className="text-yellow-300 mt-2"># Production stage</p>
              <p>FROM eclipse-temurin:17-jre-alpine</p>
              <p>WORKDIR /app</p>
              <p className="text-purple-400">COPY --from=builder /app/target/*.jar app.jar</p>
              <p>EXPOSE 8080</p>
              <p>CMD ["java", "-jar", "app.jar"]</p>
            </div>
            <div className="mt-3 bg-white p-3 rounded text-sm text-gray-700">
              <p><strong>Економія:</strong> ~900 MB (JDK + Maven) → ~200 MB (JRE)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">📊 Порівняльна таблиця</h4>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border-2 border-gray-600 p-3 text-left">Мова</th>
                  <th className="border-2 border-gray-600 p-3 text-center">Без multi-stage</th>
                  <th className="border-2 border-gray-600 p-3 text-center">З multi-stage</th>
                  <th className="border-2 border-gray-600 p-3 text-center">Економія</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Node.js</td>
                  <td className="border-2 border-gray-300 p-3 text-center">~950 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center text-green-600 font-bold">~150 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center">84%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-3 font-semibold">React + Nginx</td>
                  <td className="border-2 border-gray-300 p-3 text-center">~800 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center text-green-600 font-bold">~25 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center">97%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Python</td>
                  <td className="border-2 border-gray-300 p-3 text-center">~950 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center text-green-600 font-bold">~180 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center">81%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Go</td>
                  <td className="border-2 border-gray-300 p-3 text-center">~800 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center text-green-600 font-bold">~10 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center">99%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Java</td>
                  <td className="border-2 border-gray-300 p-3 text-center">~900 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center text-green-600 font-bold">~200 MB</td>
                  <td className="border-2 border-gray-300 p-3 text-center">78%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">✨ Загальні принципи</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2">Build stage:</p>
                <ul className="text-sm space-y-1">
                  <li>• Повний образ з інструментами</li>
                  <li>• Компіляція/збірка</li>
                  <li>• Встановлення залежностей</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2">Production stage:</p>
                <ul className="text-sm space-y-1">
                  <li>• Мінімальний базовий образ</li>
                  <li>• Тільки runtime</li>
                  <li>• Тільки результат збірки</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm font-bold text-yellow-800 mb-2">🎯 Висновок:</p>
            <p className="text-sm text-gray-800">
              Multi-stage builds — це <strong>must-have</strong> для будь-якого production додатку. 
              Менший образ = швидший deploy, менше місця, більша безпека!
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
            <p className="text-xl text-purple-100">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="p-12 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              Назад
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? 'bg-purple-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Вперед
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-100 px-8 py-3 text-center text-gray-600">
            Слайд {currentSlide + 1} з {slides.length} | Частина 6: Multi-stage builds
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;