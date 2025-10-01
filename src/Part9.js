import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Підсумок: Що ми вивчили",
      subtitle: "Ключові концепції Docker",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Ви вивчили Docker! 🎉</h3>
            <p className="text-center text-xl">
              Від основ до практичного використання
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-800 mb-4">📦 Основи</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Що таке Docker та контейнери</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Різниця між контейнерами та VM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Docker Architecture (Client, Daemon, Registry)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Images vs Containers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Volumes та Networks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">🐳 Docker Hub</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Пошук та завантаження образів</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Офіційні vs Community образи</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Публікація власних образів</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Теги та версії</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Сканування на вразливості</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4">⌨️ Команди</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>docker run, ps, stop, rm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>docker exec, logs, inspect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Робота з портами та volumes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>docker build, push, pull</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Інтерактивний режим (-it)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h4 className="text-xl font-bold text-orange-800 mb-4">📝 Dockerfile</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Основні інструкції (FROM, RUN, COPY, CMD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>COPY vs ADD, CMD vs ENTRYPOINT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Шари образу та оптимізація</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Multi-stage builds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Best practices для production</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
              <h4 className="text-xl font-bold text-cyan-800 mb-4">🎼 Docker Compose</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Структура docker-compose.yml</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Керування багатьма контейнерами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Мережі та volumes у Compose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Залежності між сервісами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Змінні оточення та .env</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
              <h4 className="text-xl font-bold text-pink-800 mb-4">🚀 Практика</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Локальна розробка з Docker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>CI/CD інтеграція</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Мікросервісна архітектура</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Тестування в контейнерах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Реальні сценарії використання</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <h4 className="text-2xl font-bold text-center mb-3">🎯 Головне</h4>
            <p className="text-center text-lg">
              Docker робить розробку швидшою, deployment простішим, 
              а середовища — передбачуваними та повторюваними!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Best Practices: Короткий список",
      subtitle: "Що запам'ятати назавжди",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-center mb-4">⭐ Best Practices</h3>
            <p className="text-center text-xl">
              Ключові правила для роботи з Docker
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-4">📦 Образи</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900 mb-1">✅ Використовуй alpine версії</p>
                  <p className="text-gray-700">node:18-alpine замість node:18</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900 mb-1">✅ Multi-stage builds</p>
                  <p className="text-gray-700">Зменшуй розмір образу на 80-90%</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900 mb-1">✅ Конкретні теги</p>
                  <p className="text-gray-700">postgres:15, не postgres:latest</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-lg font-bold text-green-800 mb-4">📝 Dockerfile</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-900 mb-1">✅ Менше шарів</p>
                  <p className="text-gray-700">Об'єднуй RUN команди через &&</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-900 mb-1">✅ Правильний порядок COPY</p>
                  <p className="text-gray-700">Залежності перед кодом</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-900 mb-1">✅ .dockerignore</p>
                  <p className="text-gray-700">Виключай node_modules, .git</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h4 className="text-lg font-bold text-purple-800 mb-4">🔒 Безпека</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900 mb-1">✅ Скануй вразливості</p>
                  <p className="text-gray-700">docker scout, trivy</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900 mb-1">✅ Не зберігай секрети</p>
                  <p className="text-gray-700">Використовуй .env файли</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900 mb-1">✅ Non-root user</p>
                  <p className="text-gray-700">USER appuser у Dockerfile</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h4 className="text-lg font-bold text-orange-800 mb-4">🗄️ Дані</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-orange-900 mb-1">✅ Named volumes для БД</p>
                  <p className="text-gray-700">Дані залишаються після rm</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-orange-900 mb-1">✅ Bind mounts для dev</p>
                  <p className="text-gray-700">Hot reload коду</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-semibold text-orange-900 mb-1">✅ Backup volumes</p>
                  <p className="text-gray-700">docker run --volumes-from</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-cyan-500">
              <h4 className="text-lg font-bold text-cyan-800 mb-4">🌐 Мережі</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-semibold text-cyan-900 mb-1">✅ Власні мережі</p>
                  <p className="text-gray-700">Замість bridge за замовчуванням</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-semibold text-cyan-900 mb-1">✅ DNS за іменами</p>
                  <p className="text-gray-700">db:5432, не IP адреси</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-semibold text-cyan-900 mb-1">✅ Ізоляція БД</p>
                  <p className="text-gray-700">Приватна backend мережа</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
              <h4 className="text-lg font-bold text-pink-800 mb-4">🔧 Розробка</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-semibold text-pink-900 mb-1">✅ Docker Compose</p>
                  <p className="text-gray-700">Для multi-container додатків</p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-semibold text-pink-900 mb-1">✅ docker logs -f</p>
                  <p className="text-gray-700">Для debugging у реальному часі</p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-semibold text-pink-900 mb-1">✅ --rm для тестів</p>
                  <p className="text-gray-700">Автоматичне видалення</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-3 text-lg">❌ Чого НЕ робити</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
              <p>• Не використовуй :latest у production</p>
              <p>• Не зберігай паролі в Dockerfile</p>
              <p>• Не копіюй node_modules в образ</p>
              <p>• Не запускай як root без потреби</p>
              <p>• Не ігноруй сканування вразливостей</p>
              <p>• Не робі надто великі образи (&gt;500MB)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ресурси для навчання",
      subtitle: "Де продовжити вивчення Docker",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">📚 Ресурси</h3>
            <p className="text-center text-xl">
              Продовжуй навчання з найкращих джерел
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-800 mb-4">📖 Офіційна документація</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-blue-900 mb-1">Docker Docs</p>
                  <a href="https://docs.docker.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    docs.docker.com
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Найповніший ресурс з усіх тем</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-blue-900 mb-1">Docker Hub</p>
                  <a href="https://hub.docker.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    hub.docker.com
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Мільйони готових образів</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-blue-900 mb-1">Compose Documentation</p>
                  <a href="https://docs.docker.com/compose" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    docs.docker.com/compose
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Все про Docker Compose</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">🎥 Відео курси</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900 mb-1">freeCodeCamp</p>
                  <p className="text-gray-700">Docker Tutorial for Beginners (YouTube)</p>
                  <p className="text-xs text-gray-600 mt-1">Безкоштовний повний курс</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900 mb-1">Docker Mastery</p>
                  <p className="text-gray-700">Bret Fisher (Udemy)</p>
                  <p className="text-xs text-gray-600 mt-1">Один з найкращих платних курсів</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-900 mb-1">TechWorld with Nana</p>
                  <p className="text-gray-700">Docker Tutorial (YouTube)</p>
                  <p className="text-xs text-gray-600 mt-1">Практичні приклади</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4">💻 Інтерактивне навчання</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-bold text-purple-900 mb-1">Play with Docker</p>
                  <a href="https://labs.play-with-docker.com" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    labs.play-with-docker.com
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Практика прямо в браузері</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-bold text-purple-900 mb-1">Katacoda</p>
                  <p className="text-gray-700">Інтерактивні сценарії Docker</p>
                  <p className="text-xs text-gray-600 mt-1">Пошагові уроки</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-bold text-purple-900 mb-1">Docker Labs</p>
                  <a href="https://github.com/docker/labs" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    github.com/docker/labs
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Офіційні навчальні лабораторії</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h4 className="text-xl font-bold text-orange-800 mb-4">📱 Спільноти</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-900 mb-1">Docker Community Slack</p>
                  <p className="text-gray-700">Офіційний Slack канал</p>
                  <p className="text-xs text-gray-600 mt-1">Допомога від експертів</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-900 mb-1">Stack Overflow</p>
                  <p className="text-gray-700">Тег: docker</p>
                  <p className="text-xs text-gray-600 mt-1">400,000+ питань та відповідей</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="font-bold text-orange-900 mb-1">Reddit</p>
                  <p className="text-gray-700">r/docker</p>
                  <p className="text-xs text-gray-600 mt-1">Новини та обговорення</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
              <h4 className="text-xl font-bold text-cyan-800 mb-4">📚 Книги</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-bold text-cyan-900 mb-1">Docker Deep Dive</p>
                  <p className="text-gray-700">Nigel Poulton</p>
                  <p className="text-xs text-gray-600 mt-1">Від основ до продвинутого</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-bold text-cyan-900 mb-1">Docker in Action</p>
                  <p className="text-gray-700">Jeff Nickoloff</p>
                  <p className="text-xs text-gray-600 mt-1">Практичний підхід</p>
                </div>
                <div className="bg-cyan-50 p-3 rounded">
                  <p className="font-bold text-cyan-900 mb-1">The Docker Book</p>
                  <p className="text-gray-700">James Turnbull</p>
                  <p className="text-xs text-gray-600 mt-1">Для початківців</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
              <h4 className="text-xl font-bold text-pink-800 mb-4">🛠️ Інструменти</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-bold text-pink-900 mb-1">Docker Desktop</p>
                  <p className="text-gray-700">GUI для Docker</p>
                  <p className="text-xs text-gray-600 mt-1">Windows, macOS, Linux</p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-bold text-pink-900 mb-1">Portainer</p>
                  <p className="text-gray-700">Веб-інтерфейс для керування</p>
                  <p className="text-xs text-gray-600 mt-1">Легке управління контейнерами</p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-bold text-pink-900 mb-1">VS Code Extensions</p>
                  <p className="text-gray-700">Docker, Docker Compose</p>
                  <p className="text-xs text-gray-600 mt-1">Інтеграція з IDE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Починай з офіційної документації та Play with Docker. 
              Практика — найкращий спосіб вивчити Docker!
            </p>
          </div>
        </div>
      )
    },
    // {
    //   title: "Що вивчати далі?",
    //   subtitle: "Наступні кроки у вашій подорожі",
    //   content: (
    //     <div className="space-y-6">
    //       <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
    //         <div className="flex items-center justify-center mb-6">
    //           <Rocket className="w-24 h-24" />
    //         </div>
    //         <h3 className="text-3xl font-bold text-center mb-4">🚀 Що далі?</h3>
    //         <p className="text-center text-xl">
    //           Ваша подорож з контейнерами тільки починається!
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-2 gap-6">
    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-blue-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">1</span>
    //             <h4 className="text-xl font-bold text-blue-800">Kubernetes</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Оркестрація контейнерів для production
    //             </p>
    //             <div className="bg-blue-50 p-3 rounded">
    //               <p className="font-semibold text-blue-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Pods, Services, Deployments</li>
    //                 <li>• Автоматичне масштабування</li>
    //                 <li>• Load balancing</li>
    //                 <li>• Self-healing</li>
    //                 <li>• Rolling updates</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Ресурси: kubernetes.io, minikube</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-green-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">2</span>
    //             <h4 className="text-xl font-bold text-green-800">Docker Swarm</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Вбудована оркестрація Docker
    //             </p>
    //             <div className="bg-green-50 p-3 rounded">
    //               <p className="font-semibold text-green-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Swarm mode</li>
    //                 <li>• Services та stacks</li>
    //                 <li>• Overlay networks</li>
    //                 <li>• Secrets management</li>
    //                 <li>• Rolling updates</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Простіше за K8s, для малих проектів</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-purple-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">3</span>
    //             <h4 className="text-xl font-bold text-purple-800">CI/CD Поглиблено</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Автоматизація всього pipeline
    //             </p>
    //             <div className="bg-purple-50 p-3 rounded">
    //               <p className="font-semibold text-purple-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Jenkins з Docker</li>
    //                 <li>• GitLab CI/CD</li>
    //                 <li>• GitHub Actions</li>
    //                 <li>• ArgoCD для K8s</li>
    //                 <li>• Automated testing</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Автоматизація від коду до production</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-orange-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">4</span>
    //             <h4 className="text-xl font-bold text-orange-800">Моніторинг</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Спостереження за контейнерами
    //             </p>
    //             <div className="bg-orange-50 p-3 rounded">
    //               <p className="font-semibold text-orange-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Prometheus + Grafana</li>
    //                 <li>• ELK Stack для логів</li>
    //                 <li>• Docker stats і metrics</li>
    //                 <li>• Health checks</li>
    //                 <li>• Alerting</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Контроль за production системами</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-cyan-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-cyan-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">5</span>
    //             <h4 className="text-xl font-bold text-cyan-800">Безпека</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Захист контейнерів та образів
    //             </p>
    //             <div className="bg-cyan-50 p-3 rounded">
    //               <p className="font-semibold text-cyan-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Image scanning (Trivy, Clair)</li>
    //                 <li>• Docker Secrets</li>
    //                 <li>• Security best practices</li>
    //                 <li>• Network policies</li>
    //                 <li>• Runtime security</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Захист від вразливостей</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-pink-500">
    //           <div className="flex items-center mb-4">
    //             <span className="bg-pink-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-3">6</span>
    //             <h4 className="text-xl font-bold text-pink-800">Service Mesh</h4>
    //           </div>
    //           <div className="space-y-3">
    //             <p className="text-gray-700 text-sm">
    //               Управління мікросервісами
    //             </p>
    //             <div className="bg-pink-50 p-3 rounded">
    //               <p className="font-semibold text-pink-900 mb-2">Що вивчити:</p>
    //               <ul className="text-xs text-gray-700 space-y-1">
    //                 <li>• Istio</li>
    //                 <li>• Linkerd</li>
    //                 <li>• Service discovery</li>
    //                 <li>• Traffic management</li>
    //                 <li>• Observability</li>
    //               </ul>
    //             </div>
    //             <div className="bg-gray-100 p-2 rounded text-xs">
    //               <p className="text-gray-600">Для складних мікросервісів</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg">
    //         <h4 className="text-2xl font-bold text-center mb-4">🎯 Рекомендований шлях</h4>
    //         <div className="flex items-center justify-between text-center">
    //           <div className="flex-1">
    //             <p className="text-3xl font-bold mb-2">1</p>
    //             <p className="text-sm">Практикуй Docker<br/>щодня</p>
    //           </div>
    //           <div className="text-3xl">→</div>
    //           <div className="flex-1">
    //             <p className="text-3xl font-bold mb-2">2</p>
    //             <p className="text-sm">Вивчи Docker<br/>Compose досконало</p>
    //           </div>
    //           <div className="text-3xl">→</div>
    //           <div className="flex-1">
    //             <p className="text-3xl font-bold mb-2">3</p>
    //             <p className="text-sm">Почни вивчати<br/>Kubernetes</p>
    //           </div>
    //           <div className="text-3xl">→</div>
    //           <div className="flex-1">
    //             <p className="text-3xl font-bold mb-2">4</p>
    //             <p className="text-sm">Додай CI/CD<br/>та моніторинг</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg text-center">
    //         <div className="flex justify-center mb-4">
    //           <GraduationCap className="w-20 h-20" />
    //         </div>
    //         <h3 className="text-3xl font-bold mb-4">Вітаємо! 🎉</h3>
    //         <p className="text-xl mb-4">
    //           Ви завершили курс Docker для студентів!
    //         </p>
    //         <p className="text-lg">
    //           Тепер час практикувати, експериментувати та будувати круті проекти!
    //         </p>
    //         <div className="mt-6 bg-white bg-opacity-20 p-4 rounded-lg">
    //           <p className="text-2xl font-bold">
    //             Docker — це навичка, яка відкриває двері до DevOps! 🚀
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }
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
              {currentSlide === slides.length - 1 ? 'Завершити' : 'Вперед'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-100 px-8 py-3 text-center text-gray-600">
            Слайд {currentSlide + 1} з {slides.length} | Частина 9: Висновки
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;