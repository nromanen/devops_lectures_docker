import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Layers, Copy, Code } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Що таке Dockerfile?",
      subtitle: "Інструкції для створення образів",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-24 h-24 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">Dockerfile</h3>
            <p className="text-lg text-gray-800 text-center leading-relaxed">
              Текстовий файл з інструкціями для автоматичного створення Docker образу
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">Що він робить?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Визначає базовий образ</li>
                <li>• Встановлює залежності</li>
                <li>• Копіює код додатку</li>
                <li>• Налаштовує оточення</li>
                <li>• Вказує команду запуску</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4">Переваги</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Автоматизація створення образів</li>
                <li>✅ Повторюваність процесу</li>
                <li>✅ Версіонування (як код)</li>
                <li>✅ Легко ділитися з командою</li>
                <li>✅ CI/CD інтеграція</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Простий приклад Dockerfile</h4>
            <div className="bg-black bg-opacity-40 p-5 rounded-lg font-mono text-sm space-y-1">
              <p className="text-yellow-300"># Базовий образ</p>
              <p>FROM node:18-alpine</p>
              
              <p className="text-yellow-300 mt-3"># Робоча директорія</p>
              <p>WORKDIR /app</p>
              
              <p className="text-yellow-300 mt-3"># Копіювання файлів</p>
              <p>COPY package*.json ./</p>
              
              <p className="text-yellow-300 mt-3"># Встановлення залежностей</p>
              <p>RUN npm install</p>
              
              <p className="text-yellow-300 mt-3"># Копіювання коду</p>
              <p>COPY . .</p>
              
              <p className="text-yellow-300 mt-3"># Порт</p>
              <p>EXPOSE 3000</p>
              
              <p className="text-yellow-300 mt-3"># Запуск</p>
              <p>CMD ["npm", "start"]</p>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-800 mb-3">Як використовувати?</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-2">
              <p className="text-gray-400"># Створити образ з Dockerfile</p>
              <p>docker build -t myapp:1.0 .</p>
              
              <p className="text-gray-400 mt-3"># Запустити контейнер</p>
              <p>docker run -p 3000:3000 myapp:1.0</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Основні інструкції Dockerfile",
      subtitle: "FROM, RUN, COPY, WORKDIR, EXPOSE, CMD",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-800 text-center mb-2">Ключові інструкції</h3>
            <p className="text-center text-gray-700">Розберемо кожну інструкцію детально</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-3">FROM</h4>
              <p className="text-sm text-gray-700 mb-3">Базовий образ (завжди перша інструкція)</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>FROM node:18</p>
                <p>FROM python:3.11-slim</p>
                <p>FROM nginx:alpine</p>
              </div>
              <div className="bg-blue-50 p-2 rounded mt-3 text-xs">
                <p className="text-blue-800">Кожен Dockerfile ОБОВ'ЯЗКОВО починається з FROM</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-lg font-bold text-green-800 mb-3">WORKDIR</h4>
              <p className="text-sm text-gray-700 mb-3">Встановлює робочу директорію</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>WORKDIR /app</p>
                <p>WORKDIR /usr/src/app</p>
              </div>
              <div className="bg-green-50 p-2 rounded mt-3 text-xs">
                <p className="text-green-800">Всі наступні команди виконуються в цій папці</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h4 className="text-lg font-bold text-purple-800 mb-3">RUN</h4>
              <p className="text-sm text-gray-700 mb-3">Виконує команди при створенні образу</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>RUN npm install</p>
                <p>RUN apt-get update && apt-get install -y curl</p>
                <p>RUN pip install -r requirements.txt</p>
              </div>
              <div className="bg-purple-50 p-2 rounded mt-3 text-xs">
                <p className="text-purple-800">⚠️ Кожна RUN створює новий шар!</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h4 className="text-lg font-bold text-orange-800 mb-3">COPY</h4>
              <p className="text-sm text-gray-700 mb-3">Копіює файли з хоста в образ</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>COPY package.json .</p>
                <p>COPY . .</p>
                <p>COPY src/ /app/src/</p>
              </div>
              <div className="bg-orange-50 p-2 rounded mt-3 text-xs">
                <p className="text-orange-800">⚠️ Також створює новий шар!</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-yellow-500">
              <h4 className="text-lg font-bold text-yellow-800 mb-3">EXPOSE</h4>
              <p className="text-sm text-gray-700 mb-3">Документує порти (не відкриває!)</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>EXPOSE 3000</p>
                <p>EXPOSE 80 443</p>
              </div>
              <div className="bg-yellow-50 p-2 rounded mt-3 text-xs">
                <p className="text-yellow-800">Інформаційна інструкція, не створює шар</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-red-500">
              <h4 className="text-lg font-bold text-red-800 mb-3">CMD</h4>
              <p className="text-sm text-gray-700 mb-3">Команда запуску контейнера</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>CMD ["npm", "start"]</p>
                <p>CMD ["python", "app.py"]</p>
                <p>CMD ["node", "server.js"]</p>
              </div>
              <div className="bg-red-50 p-2 rounded mt-3 text-xs">
                <p className="text-red-800">Виконується при запуску контейнера, НЕ при build</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-teal-500">
              <h4 className="text-lg font-bold text-teal-800 mb-3">ENV</h4>
              <p className="text-sm text-gray-700 mb-3">Змінні оточення</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>ENV NODE_ENV=production</p>
                <p>ENV PORT=3000</p>
                <p>ENV DB_HOST=localhost</p>
              </div>
              <div className="bg-teal-50 p-2 rounded mt-3 text-xs">
                <p className="text-teal-800">Доступні під час build та runtime</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-pink-500">
              <h4 className="text-lg font-bold text-pink-800 mb-3">ARG</h4>
              <p className="text-sm text-gray-700 mb-3">Аргументи для build</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>ARG VERSION=1.0</p>
                <p>ARG NODE_VERSION=18</p>
              </div>
              <div className="bg-pink-50 p-2 rounded mt-3 text-xs">
                <p className="text-pink-800">Доступні тільки під час build</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "COPY vs ADD",
      subtitle: "Коли використовувати кожну?",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-300">
            <div className="flex items-center justify-center mb-4">
              <Copy className="w-16 h-16 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 text-center">COPY vs ADD</h3>
            <p className="text-center text-gray-700 text-lg mt-2">Обидві копіюють файли, але є важливі відмінності!</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">COPY</h4>
              <p className="text-gray-700 mb-4">Проста копія файлів з хоста в образ</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Синтаксис:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    COPY &lt;src&gt; &lt;dest&gt;
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p>COPY package.json /app/</p>
                    <p>COPY . /app</p>
                    <p>COPY src/ /app/src/</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm font-bold text-blue-800 mb-2">Що робить:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✅ Копіює файли та папки</li>
                    <li>✅ Простий і зрозумілий</li>
                    <li>✅ Передбачувана поведінка</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                  <p className="text-sm font-bold text-green-800">✅ Рекомендовано!</p>
                  <p className="text-xs text-gray-700 mt-1">Використовуйте COPY у 99% випадків</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-2xl font-bold text-purple-800 mb-4">ADD</h4>
              <p className="text-gray-700 mb-4">Розширена версія з додатковими функціями</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Синтаксис:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    ADD &lt;src&gt; &lt;dest&gt;
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p>ADD app.tar.gz /app/</p>
                    <p>ADD https://example.com/file.zip /tmp/</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm font-bold text-purple-800 mb-2">Додаткові можливості:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✅ Копіює файли (як COPY)</li>
                    <li>⚡ Автоматично розпаковує .tar архіви</li>
                    <li>🌐 Завантажує файли з URL</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                  <p className="text-sm font-bold text-yellow-800">⚠️ Обережно!</p>
                  <p className="text-xs text-gray-700 mt-1">Непередбачувана поведінка з архівами</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Порівняльна таблиця</h4>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="border-2 border-gray-600 p-3 text-left">Функція</th>
                  <th className="border-2 border-gray-600 p-3 text-center bg-blue-600">COPY</th>
                  <th className="border-2 border-gray-600 p-3 text-center bg-purple-600">ADD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Копіювання файлів</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-blue-50">✅</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-purple-50">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Розпакування .tar</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-blue-50">❌</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-purple-50">✅ (автоматично)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Завантаження з URL</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-blue-50">❌</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-purple-50">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Передбачуваність</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-blue-50">✅ Висока</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-purple-50">⚠️ Нижча</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-gray-300 p-3 font-semibold">Best practice</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-green-50 font-bold text-green-700">Рекомендовано</td>
                  <td className="border-2 border-gray-300 p-3 text-center bg-yellow-50 text-yellow-700">Рідко</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Коли використовувати ADD?</h4>
            <div className="space-y-3 text-sm">
              <p>✅ Коли треба розпакувати tar/tar.gz архів:</p>
              <div className="bg-black bg-opacity-30 p-3 rounded font-mono text-xs">
                ADD app.tar.gz /app/
              </div>
              
              <p className="mt-4">❌ Для звичайного копіювання - використовуйте COPY:</p>
              <div className="bg-black bg-opacity-30 p-3 rounded font-mono text-xs">
                COPY . /app
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-bold text-red-800 mb-2">🚨 Docker Best Practice:</p>
            <p className="text-sm text-gray-800">
              Завжди віддавайте перевагу <strong>COPY</strong> замість ADD, якщо вам не потрібні специфічні можливості ADD (розпакування архівів)
            </p>
          </div>
        </div>
      )
    },
    {
      title: "CMD vs ENTRYPOINT",
      subtitle: "Різниця у командах запуску",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-300">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-16 h-16 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-800 text-center">CMD vs ENTRYPOINT</h3>
            <p className="text-center text-gray-700 text-lg mt-2">Обидві визначають що запускається, але по-різному!</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">CMD</h4>
              <p className="text-gray-700 mb-4">Команда за замовчуванням (можна перевизначити)</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Синтаксис:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p className="text-gray-400"># Exec форма (рекомендовано)</p>
                    <p>CMD ["executable", "param1", "param2"]</p>
                    
                    <p className="text-gray-400 mt-2"># Shell форма</p>
                    <p>CMD executable param1 param2</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p>CMD ["npm", "start"]</p>
                    <p>CMD ["python", "app.py"]</p>
                    <p>CMD ["node", "server.js"]</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm font-bold text-blue-800 mb-2">Особливості:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Можна ПЕРЕВИЗНАЧИТИ при docker run</li>
                    <li>• Тільки одна CMD в Dockerfile</li>
                    <li>• Використовується як аргументи для ENTRYPOINT</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-2xl font-bold text-purple-800 mb-4">ENTRYPOINT</h4>
              <p className="text-gray-700 mb-4">Фіксована команда (важко перевизначити)</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Синтаксис:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p className="text-gray-400"># Exec форма (рекомендовано)</p>
                    <p>ENTRYPOINT ["executable", "param"]</p>
                    
                    <p className="text-gray-400 mt-2"># Shell форма</p>
                    <p>ENTRYPOINT executable param</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                    <p>ENTRYPOINT ["python"]</p>
                    <p>ENTRYPOINT ["nginx", "-g", "daemon off;"]</p>
                    <p>ENTRYPOINT ["/docker-entrypoint.sh"]</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded">
                  <p className="text-sm font-bold text-purple-800 mb-2">Особливості:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• НЕ перевизначається легко</li>
                    <li>• Контейнер стає "executable"</li>
                    <li>• Аргументи docker run додаються до команди</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Порівняння на прикладах</h4>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Приклад 1: Тільки CMD</p>
                <div className="bg-black bg-opacity-40 p-3 rounded font-mono text-xs space-y-1">
                  <p className="text-yellow-300"># Dockerfile</p>
                  <p>CMD ["echo", "Hello World"]</p>
                  
                  <p className="text-yellow-300 mt-2"># Запуск</p>
                  <p>docker run myimage</p>
                  <p className="text-gray-300"># Вивід: Hello World</p>
                  
                  <p className="text-yellow-300 mt-2"># Перевизначення</p>
                  <p>docker run myimage echo "Goodbye"</p>
                  <p className="text-gray-300"># Вивід: Goodbye</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Приклад 2: Тільки ENTRYPOINT</p>
                <div className="bg-black bg-opacity-40 p-3 rounded font-mono text-xs space-y-1">
                  <p className="text-yellow-300"># Dockerfile</p>
                  <p>ENTRYPOINT ["echo"]</p>
                  
                  <p className="text-yellow-300 mt-2"># Запуск</p>
                  <p>docker run myimage Hello World</p>
                  <p className="text-gray-300"># Вивід: Hello World</p>
                  
                  <p className="text-gray-300 mt-2"># "Hello World" стає аргументами для echo</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Приклад 3: ENTRYPOINT + CMD разом</p>
                <div className="bg-black bg-opacity-40 p-3 rounded font-mono text-xs space-y-1">
                  <p className="text-yellow-300"># Dockerfile</p>
                  <p>ENTRYPOINT ["python"]</p>
                  <p>CMD ["app.py"]</p>
                  
                  <p className="text-yellow-300 mt-2"># Запуск за замовчуванням</p>
                  <p>docker run myimage</p>
                  <p className="text-gray-300"># Виконає: python app.py</p>
                  
                  <p className="text-yellow-300 mt-2"># З іншим файлом</p>
                  <p>docker run myimage test.py</p>
                  <p className="text-gray-300"># Виконає: python test.py</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Коли що використовувати?</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="font-bold text-blue-800 mb-2">Використовуйте CMD:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Для стандартних додатків</li>
                  <li>• Коли команда може змінюватися</li>
                  <li>• Для простих випадків</li>
                </ul>
                <div className="bg-white p-2 rounded mt-3 font-mono text-xs">
                  CMD ["npm", "start"]
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-2">Використовуйте ENTRYPOINT:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Для CLI інструментів</li>
                  <li>• Коли контейнер = програма</li>
                  <li>• З CMD для гнучкості</li>
                </ul>
                <div className="bg-white p-2 rounded mt-3 font-mono text-xs">
                  ENTRYPOINT ["python"]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
            <p className="text-sm font-bold text-green-800 mb-2">✅ Best Practice:</p>
            <p className="text-sm text-gray-800">
              Використовуйте <strong>ENTRYPOINT</strong> для фіксованої частини команди та <strong>CMD</strong> для аргументів за замовчуванням
            </p>
          </div>
        </div>
      )
    },
    {
  title: "Шари образу та Best Practices",
  subtitle: "Оптимізація розміру та швидкості",
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <Layers className="w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold text-center">Шари Docker образу</h3>
        <p className="text-center text-lg mt-2">Розуміння шарів = оптимізація образів</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h4 className="text-xl font-bold text-red-800 mb-4">❌ Створюють НОВИЙ шар</h4>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
              <p className="font-mono text-red-700 font-bold">FROM</p>
              <p className="text-xs text-gray-600 mt-1">Базовий образ</p>
            </div>
            <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
              <p className="font-mono text-red-700 font-bold">RUN</p>
              <p className="text-xs text-gray-600 mt-1">Виконання команд</p>
            </div>
            <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
              <p className="font-mono text-red-700 font-bold">COPY</p>
              <p className="text-xs text-gray-600 mt-1">Копіювання файлів</p>
            </div>
            <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
              <p className="font-mono text-red-700 font-bold">ADD</p>
              <p className="text-xs text-gray-600 mt-1">Копіювання + розпакування</p>
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded mt-4 text-sm text-orange-800">
            <p><strong>⚠️ Увага:</strong> Кожна з цих команд збільшує розмір образу!</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h4 className="text-xl font-bold text-green-800 mb-4">✅ НЕ створюють шар</h4>
          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">CMD</p>
              <p className="text-xs text-gray-600 mt-1">Команда запуску</p>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">ENTRYPOINT</p>
              <p className="text-xs text-gray-600 mt-1">Точка входу</p>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">ENV</p>
              <p className="text-xs text-gray-600 mt-1">Змінні оточення</p>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">EXPOSE</p>
              <p className="text-xs text-gray-600 mt-1">Документація портів</p>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">WORKDIR</p>
              <p className="text-xs text-gray-600 mt-1">Робоча директорія</p>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-2 border-green-400">
              <p className="font-mono text-green-700 font-bold">ARG, LABEL, USER</p>
              <p className="text-xs text-gray-600 mt-1">Метадані</p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4 text-sm text-blue-800">
            <p><strong>✅ Перевага:</strong> Тільки metadata, не впливають на розмір!</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <h4 className="text-xl font-bold text-blue-800 mb-4">📊 Візуалізація шарів</h4>
        <div className="bg-white p-4 rounded-lg">
          <div className="space-y-2">
            <div className="bg-gray-200 p-3 rounded text-center font-mono text-sm">
              FROM ubuntu:22.04 <span className="text-red-600">← Шар 1</span>
            </div>
            <div className="bg-gray-200 p-3 rounded text-center font-mono text-sm">
              RUN apt-get update <span className="text-red-600">← Шар 2</span>
            </div>
            <div className="bg-gray-200 p-3 rounded text-center font-mono text-sm">
              COPY app.js /app/ <span className="text-red-600">← Шар 3</span>
            </div>
            <div className="bg-gray-100 p-3 rounded text-center font-mono text-sm text-gray-500">
              ENV NODE_ENV=production <span className="text-green-600">← Metadata</span>
            </div>
            <div className="bg-gray-100 p-3 rounded text-center font-mono text-sm text-gray-500">
              CMD ["node", "app.js"] <span className="text-green-600">← Metadata</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-3">
            <strong>Результат:</strong> 3 шари + metadata
          </p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h4 className="text-xl font-bold text-purple-800 mb-4">🚀 Best Practices для зменшення розміру</h4>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">1. Об'єднуйте RUN команди</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-red-600 font-semibold mb-1">❌ Погано (3 шари):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>RUN apt-get update</p>
                  <p>RUN apt-get install -y curl</p>
                  <p>RUN apt-get clean</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-green-600 font-semibold mb-1">✅ Добре (1 шар):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>RUN apt-get update && \</p>
                  <p className="ml-2">apt-get install -y curl && \</p>
                  <p className="ml-2">apt-get clean</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">2. Використовуйте alpine образи</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-red-600 font-semibold mb-1">❌ Великий (~900 MB):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>FROM node:18</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-green-600 font-semibold mb-1">✅ Маленький (~170 MB):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>FROM node:18-alpine</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">3. Використовуйте .dockerignore</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-semibold mb-1">Створіть .dockerignore:</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>node_modules</p>
                  <p>.git</p>
                  <p>*.log</p>
                  <p>.env</p>
                  <p>README.md</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-700 mb-1">Результат:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✅ Менший розмір образу</li>
                  <li>✅ Швидший build</li>
                  <li>✅ Немає зайвих файлів</li>
                  <li>✅ Безпечніше (без .env)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">4. Чистіть кеш після встановлення</p>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
              <p className="text-gray-400"># Debian/Ubuntu</p>
              <p>RUN apt-get update && apt-get install -y package && \</p>
              <p className="ml-4">rm -rf /var/lib/apt/lists/*</p>
              
              <p className="text-gray-400 mt-3"># Alpine</p>
              <p>RUN apk add --no-cache package</p>
              
              <p className="text-gray-400 mt-3"># Node.js</p>
              <p>RUN npm install --production && npm cache clean --force</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">5. Копіюйте файли в правильному порядку</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-red-600 font-semibold mb-1">❌ Погано:</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>COPY . .</p>
                  <p>RUN npm install</p>
                </div>
                <p className="text-xs text-gray-600 mt-1">При зміні будь-якого файлу - npm install знову</p>
              </div>
              <div>
                <p className="text-xs text-green-600 font-semibold mb-1">✅ Добре:</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>COPY package*.json ./</p>
                  <p>RUN npm install</p>
                  <p>COPY . .</p>
                </div>
                <p className="text-xs text-gray-600 mt-1">Кеш npm install зберігається</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold text-purple-800 mb-2">6. Видаляйте тимчасові файли в тій же RUN</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-red-600 font-semibold mb-1">❌ Погано (файл залишиться):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>RUN wget file.tar.gz</p>
                  <p>RUN tar -xzf file.tar.gz</p>
                  <p>RUN rm file.tar.gz</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-green-600 font-semibold mb-1">✅ Добре (файл видалено):</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>RUN wget file.tar.gz && \</p>
                  <p className="ml-2">tar -xzf file.tar.gz && \</p>
                  <p className="ml-2">rm file.tar.gz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-4">📏 Порівняння розмірів</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white bg-opacity-20 p-4 rounded">
            <p className="text-3xl font-bold mb-2">900 MB</p>
            <p className="text-sm">node:18 (повний)</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded">
            <p className="text-3xl font-bold mb-2">170 MB</p>
            <p className="text-sm">node:18-alpine</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded">
            <p className="text-3xl font-bold mb-2">~50 MB</p>
            <p className="text-sm">alpine + node</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800 mb-3">💡 Золоте правило</h4>
        <p className="text-sm text-gray-800">
          Менше шарів = менший образ = швидший build = швидший deploy!
        </p>
        <p className="text-sm text-gray-800 mt-2">
          <strong>Мета:</strong> Образ для production додатку має бути &lt; 200 MB
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
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
            Слайд {currentSlide + 1} з {slides.length} | Частина 5: Dockerfile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;