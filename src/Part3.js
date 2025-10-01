import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Search, Download, Upload, Lock, Globe, Star, Shield } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Що таке Docker Hub?",
      subtitle: "Найбільший реєстр Docker образів",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <div className="flex items-center justify-center mb-6">
              <Cloud className="w-24 h-24 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">Docker Hub</h3>
            <p className="text-lg text-gray-800 leading-relaxed text-center">
              <strong>Docker Hub</strong> — це хмарний сервіс для зберігання, пошуку та обміну Docker образами. 
              Це як GitHub, але для контейнерів!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Публічні репозиторії
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Безкоштовні</li>
                <li>• Доступні всім</li>
                <li>• Необмежена кількість pull</li>
                <li>• Офіційні образи (nginx, node, python)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2" />
                Приватні репозиторії
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Доступ лише для вас/команди</li>
                <li>• Безпечне зберігання</li>
                <li>• Комерційні проекти</li>
                <li>• 1 безкоштовний приватний репо</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="text-2xl font-bold mb-3 text-center">📊 Статистика</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold">100M+</p>
                <p className="text-sm">Завантажень образів</p>
              </div>
              <div>
                <p className="text-4xl font-bold">10M+</p>
                <p className="text-sm">Репозиторіїв</p>
              </div>
              <div>
                <p className="text-4xl font-bold">8M+</p>
                <p className="text-sm">Розробників</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-800">
              <strong>🌐 URL:</strong> <span className="font-mono text-blue-600">https://hub.docker.com</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Офіційні образи",
      subtitle: "Перевірені та підтримувані образи",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <div className="flex items-center mb-4">
              <Shield className="w-12 h-12 text-green-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-green-800">Official Images</h3>
                <p className="text-gray-700">Перевірені Docker Inc. та спільнотою</p>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Офіційні образи — це високоякісні образи, які підтримуються розробниками проектів 
              або Docker-спільнотою. Вони регулярно оновлюються та перевіряються на безпеку.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="text-center mb-3">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🐳</span>
                </div>
                <h4 className="font-bold text-lg text-blue-800">nginx</h4>
              </div>
              <p className="text-sm text-gray-600 text-center mb-3">Веб-сервер та reverse proxy</p>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                docker pull nginx
              </div>
              <div className="flex items-center justify-center mt-3 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs ml-1">15K+ stars</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="text-center mb-3">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🟢</span>
                </div>
                <h4 className="font-bold text-lg text-green-800">node</h4>
              </div>
              <p className="text-sm text-gray-600 text-center mb-3">JavaScript runtime</p>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                docker pull node:18
              </div>
              <div className="flex items-center justify-center mt-3 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs ml-1">12K+ stars</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-yellow-500">
              <div className="text-center mb-3">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🐍</span>
                </div>
                <h4 className="font-bold text-lg text-yellow-800">python</h4>
              </div>
              <p className="text-sm text-gray-600 text-center mb-3">Python programming language</p>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                docker pull python:3.11
              </div>
              <div className="flex items-center justify-center mt-3 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs ml-1">10K+ stars</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
              <p className="font-bold text-purple-800">postgres</p>
              <p className="text-xs text-gray-600 mt-1">SQL база даних</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300 text-center">
              <p className="font-bold text-red-800">redis</p>
              <p className="text-xs text-gray-600 mt-1">In-memory cache</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center">
              <p className="font-bold text-orange-800">ubuntu</p>
              <p className="text-xs text-gray-600 mt-1">Linux OS</p>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-2">✅ Переваги офіційних образів:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <p>• Регулярні оновлення безпеки</p>
              <p>• Оптимізовані розміри</p>
              <p>• Детальна документація</p>
              <p>• Перевірений код</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Пошук образів",
      subtitle: "Як знайти потрібний образ?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Пошук на Docker Hub</h3>
            <p className="text-center text-blue-100">hub.docker.com</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">🌐 Через веб-інтерфейс</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">1. Відкрити hub.docker.com</p>
                  <p className="text-xs text-gray-600">Перейти на сайт Docker Hub</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">2. Ввести назву в пошук</p>
                  <p className="text-xs text-gray-600">Наприклад: "node", "postgres", "nginx"</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">3. Фільтрувати результати</p>
                  <p className="text-xs text-gray-600">Official Images, Community Images</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">💻 Через командний рядок</h4>
              <div className="space-y-3">
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <p className="text-gray-400"># Пошук образів</p>
                  <p>docker search nginx</p>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <p className="text-gray-400"># Тільки офіційні</p>
                  <p>docker search --filter is-official=true nginx</p>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <p className="text-gray-400"># З високим рейтингом</p>
                  <p>docker search --filter stars=100 nodejs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
            <h4 className="text-lg font-bold text-yellow-800 mb-4">🔍 На що звертати увагу при виборі:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">✅ <strong>Official Image</strong> — краще обирати офіційні</p>
                <p className="text-gray-700">⭐ <strong>Зірки (Stars)</strong> — популярність образу</p>
                <p className="text-gray-700">📥 <strong>Pulls</strong> — кількість завантажень</p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">📅 <strong>Last Updated</strong> — як давно оновлювався</p>
                <p className="text-gray-700">📄 <strong>Документація</strong> — чи є README</p>
                <p className="text-gray-700">🏷️ <strong>Теги</strong> — доступні версії</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <p className="text-red-800">
              <strong>⚠️ Увага:</strong> Не використовуйте образи з неперевірених джерел! 
              Вони можуть містити вразливості або шкідливий код.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Завантаження образів",
      subtitle: "Docker pull - отримання образів з Hub",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold text-center">docker pull</h3>
            <p className="text-center text-green-100 text-lg mt-2">Завантаження образів з Docker Hub</p>
          </div>

          <div className="bg-gray-50 p-6 space-y-6">
      {/* Синтаксис команди */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Синтаксис команди</h4>
        <div className="bg-gray-900 text-white p-6 rounded-lg font-mono">
          <p className="text-green-400 mb-2"># Базовий формат</p>
          <p className="text-xl mb-4">docker pull [OPTIONS] NAME[:TAG]</p>
          <p className="text-green-400 mb-2 mt-6"># Приклади</p>
          <div className="space-y-2 text-base">
            <p><span className="text-blue-400">docker pull</span> nginx</p>
            <p><span className="text-blue-400">docker pull</span> nginx:latest</p>
            <p><span className="text-blue-400">docker pull</span> nginx:1.25-alpine</p>
            <p><span className="text-blue-400">docker pull</span> postgres:15</p>
          </div>
        </div>
      </div>

      {/* OPTIONS */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Доступні OPTIONS</h4>
        
        <div className="space-y-6">
          {/* Option 1 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-lg text-gray-800 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base">--all-tags</span> або 
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base ml-2">-a</span>
            </h5>
            <p className="text-gray-700 mb-3">Завантажити всі теги образу</p>
            <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
              <p className="text-green-400 mb-2"># Завантажити всі версії nginx</p>
              <p>docker pull --all-tags nginx</p>
              <p className="text-yellow-400 mt-2"># Завантажить: latest, 1.25, alpine, stable...</p>
            </div>
            <p className="text-red-600 mt-2 text-sm">⚠️ Може завантажити десятки гігабайт!</p>
          </div>

          {/* Option 2 */}
          <div className="border-l-4 border-green-500 pl-4">
            <h5 className="font-bold text-lg text-gray-800 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base">--platform</span>
            </h5>
            <p className="text-gray-700 mb-3">Вказати платформу (архітектуру)</p>
            <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
              <p className="text-green-400 mb-2"># Для Intel/AMD</p>
              <p>docker pull --platform linux/amd64 nginx</p>
              <p className="text-green-400 mt-3 mb-2"># Для ARM (Apple M1/M2, Raspberry Pi)</p>
              <p>docker pull --platform linux/arm64 nginx</p>
              <p className="text-green-400 mt-3 mb-2"># Для ARM 32-bit</p>
              <p>docker pull --platform linux/arm/v7 nginx</p>
            </div>
            <p className="text-blue-600 mt-2 text-sm">💡 Дуже корисно на Apple Silicon (M1/M2/M3)!</p>
          </div>

          {/* Option 3 */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h5 className="font-bold text-lg text-gray-800 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base">--quiet</span> або 
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base ml-2">-q</span>
            </h5>
            <p className="text-gray-700 mb-3">Тихий режим - показати тільки digest</p>
            <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
              <p className="text-green-400 mb-2"># Без прогресу, тільки результат</p>
              <p>docker pull -q nginx:alpine</p>
              <p className="text-gray-400 mt-2"># Вивід: sha256:abc123...</p>
            </div>
            <p className="text-blue-600 mt-2 text-sm">💡 Корисно для автоматизації та скриптів</p>
          </div>

          {/* Option 4 */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h5 className="font-bold text-lg text-gray-800 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded font-mono text-base">--disable-content-trust</span>
            </h5>
            <p className="text-gray-700 mb-3">Вимкнути перевірку підпису образу</p>
            <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
              <p className="text-green-400 mb-2"># Пропустити перевірку підпису</p>
              <p>docker pull --disable-content-trust myimage:latest</p>
            </div>
            <p className="text-gray-600 mt-2 text-sm">Використовується рідко, в основному для приватних registry</p>
          </div>
        </div>
      </div>

      {/* Практичні приклади */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Практичні приклади</h4>
        
        <div className="space-y-4">
          <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
            <p className="text-green-400 mb-2"># Для Apple Silicon (M1/M2)</p>
            <p>docker pull --platform linux/amd64 mysql:8.0</p>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
            <p className="text-green-400 mb-2"># Тихий pull у скрипті</p>
            <p>IMAGE_ID=$(docker pull -q nginx:alpine)</p>
            <p>echo "Downloaded: $IMAGE_ID"</p>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
            <p className="text-green-400 mb-2"># Комбінація опцій</p>
            <p>docker pull --platform linux/arm64 --quiet nginx:alpine</p>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm">
            <p className="text-green-400 mb-2"># З приватного registry</p>
            <p>docker pull registry.example.com/myapp:v1.0</p>
          </div>
        </div>
      </div>

      {/* Платформи */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Доступні платформи</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <p className="font-mono font-bold text-blue-800">linux/amd64</p>
            <p className="text-sm text-gray-700">Intel/AMD x86_64</p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <p className="font-mono font-bold text-green-800">linux/arm64</p>
            <p className="text-sm text-gray-700">ARM 64-bit (M1/M2, RPi 4)</p>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <p className="font-mono font-bold text-purple-800">linux/arm/v7</p>
            <p className="text-sm text-gray-700">ARM 32-bit (старі RPi)</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
            <p className="font-mono font-bold text-yellow-800">linux/386</p>
            <p className="text-sm text-gray-700">Intel 32-bit</p>
          </div>
        </div>
      </div>
    </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Теги (Tags)</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600">nginx:latest</p>
                  <p className="text-xs text-gray-600 mt-1">Остання стабільна версія (за замовчуванням)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600">node:18</p>
                  <p className="text-xs text-gray-600 mt-1">Конкретна мажорна версія</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600">python:3.11-slim</p>
                  <p className="text-xs text-gray-600 mt-1">Версія + варіант (slim, alpine)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600">redis:7.2.4-alpine</p>
                  <p className="text-xs text-gray-600 mt-1">Точна версія + платформа</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Варіанти образів</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                  <p className="font-bold text-green-700">alpine</p>
                  <p className="text-xs text-gray-600">Найменший розмір (~5-50 MB)</p>
                  <p className="text-xs text-gray-500 mt-1">Для production, мінімалізм</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <p className="font-bold text-blue-700">slim</p>
                  <p className="text-xs text-gray-600">Зменшений розмір (~100-200 MB)</p>
                  <p className="text-xs text-gray-500 mt-1">Баланс розміру та функціоналу</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                  <p className="font-bold text-orange-700">default</p>
                  <p className="text-xs text-gray-600">Повний образ (~500+ MB)</p>
                  <p className="text-xs text-gray-500 mt-1">Всі інструменти для розробки</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg border-2 border-gray-300">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Що відбувається при docker pull?</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center bg-white p-3 rounded">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                <p className="text-gray-700">Docker підключається до Docker Hub</p>
              </div>
              <div className="flex items-center bg-white p-3 rounded">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                <p className="text-gray-700">Завантажує всі шари образу (layers)</p>
              </div>
              <div className="flex items-center bg-white p-3 rounded">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                <p className="text-gray-700">Кешує шари локально (спільні шари не завантажуються повторно)</p>
              </div>
              <div className="flex items-center bg-white p-3 rounded">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">✓</span>
                <p className="text-gray-700">Образ готовий до використання!</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Завжди вказуйте конкретний тег (не latest) для стабільності у production!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Публікація образів",
      subtitle: "Docker push - завантаження на Hub",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Upload className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold text-center">docker push</h3>
            <p className="text-center text-purple-100 text-lg mt-2">Публікація власних образів</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h4 className="text-xl font-bold text-orange-800 mb-4">📋 Кроки для публікації:</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                  <h5 className="font-bold text-gray-800">Створити акаунт на Docker Hub</h5>
                </div>
                <p className="text-sm text-gray-600 ml-11">Зареєструватися на hub.docker.com</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                  <h5 className="font-bold text-gray-800">Увійти через термінал</h5>
                </div>
                <div className="ml-11 bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-2">
                  docker login
                </div>
                <p className="text-xs text-gray-600 ml-11 mt-2">Ввести username та password</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                  <h5 className="font-bold text-gray-800">Тегувати образ</h5>
                </div>
                <div className="ml-11 bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-2">
                  docker tag myapp username/myapp:v1.0
                </div>
                <p className="text-xs text-gray-600 ml-11 mt-2">Формат: username/repository:tag</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold">4</span>
                  <h5 className="font-bold text-gray-800">Завантажити на Hub</h5>
                </div>
                <div className="ml-11 bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mt-2">
                  docker push username/myapp:v1.0
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-lg border-2 border-gray-300">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Повний приклад</h4>
              <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-2">
                <p className="text-green-400"># Побудувати образ</p>
                <p>docker build -t myapp .</p>
                
                <p className="text-green-400 mt-3"># Увійти в Docker Hub</p>
                <p>docker login</p>
                
                <p className="text-green-400 mt-3"># Тегувати</p>
                <p>docker tag myapp john/myapp:1.0</p>
                <p>(якщо він не був створений так: docker build -t username/myapp:v1.0 .)</p>
                
                <p className="text-green-400 mt-3"># Завантажити</p>
                <p>docker push john/myapp:1.0</p>
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Іменування образів</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600 mb-1">username/app</p>
                  <p className="text-xs text-gray-600">Публічний репозиторій</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600 mb-1">username/app:latest</p>
                  <p className="text-xs text-gray-600">З тегом (за замовчуванням latest)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600 mb-1">username/app:v1.2.3</p>
                  <p className="text-xs text-gray-600">Семантична версія</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-mono text-blue-600 mb-1">username/app:prod</p>
                  <p className="text-xs text-gray-600">Production версія</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-2">🔒 Безпека:</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Не публікуйте секрети (паролі, API ключі) в образах</li>
              <li>• Використовуйте .dockerignore для виключення файлів</li>
              <li>• Перевіряйте образи на вразливості перед публікацією</li>
            </ul>
          </div>
        </div>
      )
    },
    {
  title: "Безпека: Сканування вразливостей",
  subtitle: "Перевірка образів перед публікацією",
  content: (
    <div className="space-y-6">
      <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
        <div className="flex items-center mb-4">
          <Shield className="w-12 h-12 text-red-600 mr-4" />
          <div>
            <h3 className="text-2xl font-bold text-red-800">Чому це важливо?</h3>
            <p className="text-gray-700">Образи можуть містити вразливі бібліотеки та пакети</p>
          </div>
        </div>
        <p className="text-gray-800">
          Перевірка на вразливості допомагає виявити проблеми безпеки до того, 
          як ваш додаток потрапить у production
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
          <h4 className="text-xl font-bold text-blue-800 mb-4">Docker Scout</h4>
          <p className="text-sm text-gray-600 mb-4">Вбудований в Docker Desktop</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
            <p className="text-gray-400"># Базовий аналіз</p>
            <p>docker scout cves myapp:latest</p>
            
            <p className="text-gray-400 mt-3"># Швидкий огляд</p>
            <p>docker scout quickview myapp</p>
            
            <p className="text-gray-400 mt-3"># Рекомендації</p>
            <p>docker scout recommendations myapp</p>
          </div>
          <div className="mt-4 bg-blue-50 p-3 rounded text-sm">
            <p className="text-blue-800"><strong>Переваги:</strong> вже встановлений, швидкий</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
          <h4 className="text-xl font-bold text-purple-800 mb-4">Trivy</h4>
          <p className="text-sm text-gray-600 mb-4">Популярний безкоштовний сканер</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
            <p className="text-gray-400"># Встановити</p>
            <p>brew install trivy</p>
            
            <p className="text-gray-400 mt-3"># Сканувати образ</p>
            <p>trivy image myapp:latest</p>
            
            <p className="text-gray-400 mt-3"># Тільки критичні</p>
            <p>trivy image --severity HIGH,CRITICAL myapp</p>
          </div>
          <div className="mt-4 bg-purple-50 p-3 rounded text-sm">
            <p className="text-purple-800"><strong>Переваги:</strong> детальні звіти, швидкий</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-4">Рівні вразливостей</h4>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">
            <p className="text-3xl font-bold mb-2">🔴</p>
            <p className="font-bold">CRITICAL</p>
            <p className="text-sm">Негайно виправити</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">
            <p className="text-3xl font-bold mb-2">🟠</p>
            <p className="font-bold">HIGH</p>
            <p className="text-sm">Пріоритетно</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">
            <p className="text-3xl font-bold mb-2">🟡</p>
            <p className="font-bold">MEDIUM</p>
            <p className="text-sm">Важливо</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded text-center">
            <p className="text-3xl font-bold mb-2">🔵</p>
            <p className="font-bold">LOW</p>
            <p className="text-sm">Незначні</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
        <h4 className="text-lg font-bold text-green-800 mb-4">✅ Best Practices</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="text-gray-800">• Використовуйте офіційні базові образи</p>
            <p className="text-gray-800">• Оновлюйте базові образи регулярно</p>
            <p className="text-gray-800">• Використовуйте alpine/slim версії</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800">• Сканувати перед кожним push</p>
            <p className="text-gray-800">• Виправляти критичні вразливості</p>
            <p className="text-gray-800">• Не ігнорувати попередження</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
        <h4 className="text-lg font-bold text-gray-800 mb-4">🔄 Повний workflow</h4>
        <div className="space-y-3">
          <div className="flex items-center bg-gray-50 p-3 rounded">
            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">1</span>
            <div className="font-mono text-sm">docker build -t myapp:1.0 .</div>
          </div>
          <div className="flex items-center bg-gray-50 p-3 rounded">
            <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">2</span>
            <div className="font-mono text-sm">trivy image myapp:1.0</div>
          </div>
          <div className="flex items-center bg-gray-50 p-3 rounded">
            <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">3</span>
            <div className="text-sm">Виправити вразливості → перебудувати</div>
          </div>
          <div className="flex items-center bg-gray-50 p-3 rounded">
            <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm">4</span>
            <div className="font-mono text-sm">docker push username/myapp:1.0</div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <p className="text-sm text-gray-800">
          <strong>💡 Порада:</strong> Інтегруйте сканування у CI/CD pipeline для автоматичної перевірки!
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
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
            <p className="text-xl text-blue-100">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-12 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                    currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Вперед
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="bg-gray-100 px-8 py-3 text-center text-gray-600">
            Слайд {currentSlide + 1} з {slides.length} | Частина 3: Docker Hub
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;