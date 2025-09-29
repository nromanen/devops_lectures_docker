import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, GitBranch, Boxes, TestTube } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Локальна розробка",
      subtitle: "Docker для зручної розробки",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Development with Docker</h3>
            <p className="text-center text-xl">
              "У мене працює" стане реальністю для всієї команди
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">✅ Переваги для розробки</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🚀 Швидкий старт</p>
                <p className="text-sm text-gray-700">Новий розробник: git clone → docker compose up</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🔄 Однакове оточення</p>
                <p className="text-sm text-gray-700">Всі мають ту саму версію БД, Redis, etc.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🧹 Чисте середовище</p>
                <p className="text-sm text-gray-700">Не засмічуєш систему пакетами</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🔀 Кілька проектів</p>
                <p className="text-sm text-gray-700">Різні версії Node.js/Python паралельно</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Приклад: Full-stack додаток</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
              <p className="text-yellow-300"># docker-compose.yml для розробки</p>
              <p className="text-green-400">services:</p>
              
              <p className="ml-2 text-blue-400">frontend:</p>
              <p className="ml-4">build: ./frontend</p>
              <p className="ml-4">volumes:</p>
              <p className="ml-6 text-purple-400">- ./frontend/src:/app/src</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "3000:3000"</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- NODE_ENV=development</p>
              
              <p className="ml-2 text-blue-400 mt-2">backend:</p>
              <p className="ml-4">build: ./backend</p>
              <p className="ml-4">volumes:</p>
              <p className="ml-6 text-purple-400">- ./backend/src:/app/src</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "5000:5000"</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- db</p>
              <p className="ml-6">- redis</p>
              
              <p className="ml-2 text-blue-400 mt-2">db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">POSTGRES_PASSWORD: dev123</p>
              <p className="ml-4">volumes:</p>
              <p className="ml-6">- pgdata:/var/lib/postgresql/data</p>
              
              <p className="ml-2 text-blue-400 mt-2">redis:</p>
              <p className="ml-4">image: redis:alpine</p>
              
              <p className="text-green-400 mt-3">volumes:</p>
              <p className="ml-2">pgdata:</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Hot Reload / Live Reload</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-800 mb-3">За допомогою volumes:</p>
                <div className="bg-white p-4 rounded shadow text-sm">
                  <p className="text-gray-700 mb-2">
                    <code className="bg-gray-200 px-2 py-1 rounded">- ./src:/app/src</code>
                  </p>
                  <p className="text-gray-700">
                    ✅ Зміни в коді → автоматично в контейнері<br/>
                    ✅ Nodemon, webpack watch працюють<br/>
                    ✅ Не треба перебудовувати образ
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-3">Приклад Dockerfile:</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                  <p>FROM node:18</p>
                  <p>WORKDIR /app</p>
                  <p>COPY package*.json ./</p>
                  <p>RUN npm install</p>
                  <p className="text-yellow-300"># Код не копіюємо!</p>
                  <p className="text-yellow-300"># Буде через volume</p>
                  <p>CMD ["npm", "run", "dev"]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Workflow розробника</h4>
            <div className="space-y-3">
              <div className="flex items-start bg-white p-3 rounded shadow">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-800">Клонувати проект</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">git clone repo && cd repo</code>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-3 rounded shadow">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-800">Запустити середовище</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">docker compose up -d</code>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-3 rounded shadow">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-800">Розробляти!</p>
                  <p className="text-xs text-gray-600">Редагувати код, зміни застосовуються автоматично</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-3 rounded shadow">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-gray-800">Дивитись логи</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">docker compose logs -f backend</code>
                </div>
              </div>
              
              <div className="flex items-start bg-white p-3 rounded shadow">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold text-gray-800">Закінчити роботу</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">docker compose down</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Результат:</strong> Новий член команди готовий до роботи за 5 хвилин, без установки PostgreSQL, Redis, Node.js певної версії!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "CI/CD інтеграція",
      subtitle: "Docker у конвеєрах розробки",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <GitBranch className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Docker у CI/CD</h3>
            <p className="text-center text-xl">
              Автоматизація збірки, тестування та деплою
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Що таке CI/CD?</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded shadow">
                <p className="font-bold text-blue-700 mb-3 text-lg">CI - Continuous Integration</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Автоматична збірка при push</li>
                  <li>• Запуск тестів</li>
                  <li>• Перевірка коду (linting)</li>
                  <li>• Створення образів</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded shadow">
                <p className="font-bold text-cyan-700 mb-3 text-lg">CD - Continuous Deployment</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Автоматичний deploy</li>
                  <li>• Push образу в registry</li>
                  <li>• Оновлення на серверах</li>
                  <li>• Rollback при проблемах</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Приклад: GitHub Actions</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
              <p className="text-yellow-300"># .github/workflows/docker.yml</p>
              <p className="text-green-400">name: Docker Build and Push</p>
              
              <p className="text-green-400 mt-3">on:</p>
              <p className="ml-2">push:</p>
              <p className="ml-4">branches: [main]</p>
              
              <p className="text-green-400 mt-3">jobs:</p>
              <p className="ml-2 text-blue-400">build:</p>
              <p className="ml-4">runs-on: ubuntu-latest</p>
              <p className="ml-4">steps:</p>
              
              <p className="ml-6 text-purple-400">- name: Checkout code</p>
              <p className="ml-8">uses: actions/checkout@v3</p>
              
              <p className="ml-6 text-purple-400 mt-2">- name: Login to Docker Hub</p>
              <p className="ml-8">run: docker login -u ${"{{secrets.DOCKER_USER}}"} \</p>
              <p className="ml-12">-p ${"{{secrets.DOCKER_PASSWORD}}"}</p>
              
              <p className="ml-6 text-purple-400 mt-2">- name: Build image</p>
              <p className="ml-8">run: docker build -t myapp:${"{{github.sha}}"} .</p>
              
              <p className="ml-6 text-purple-400 mt-2">- name: Run tests</p>
              <p className="ml-8">run: docker run myapp:${"{{github.sha}}"} npm test</p>
              
              <p className="ml-6 text-purple-400 mt-2">- name: Push to registry</p>
              <p className="ml-8">run: docker push myapp:${"{{github.sha}}"}</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">GitLab CI приклад</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
              <p className="text-yellow-300"># .gitlab-ci.yml</p>
              <p className="text-blue-400">stages:</p>
              <p className="ml-2">- build</p>
              <p className="ml-2">- test</p>
              <p className="ml-2">- deploy</p>
              
              <p className="text-blue-400 mt-3">build:</p>
              <p className="ml-2">stage: build</p>
              <p className="ml-2">script:</p>
              <p className="ml-4">- docker build -t $CI_REGISTRY_IMAGE .</p>
              <p className="ml-4">- docker push $CI_REGISTRY_IMAGE</p>
              
              <p className="text-blue-400 mt-3">test:</p>
              <p className="ml-2">stage: test</p>
              <p className="ml-2">script:</p>
              <p className="ml-4">- docker run $CI_REGISTRY_IMAGE npm test</p>
              
              <p className="text-blue-400 mt-3">deploy:</p>
              <p className="ml-2">stage: deploy</p>
              <p className="ml-2">script:</p>
              <p className="ml-4">- docker pull $CI_REGISTRY_IMAGE</p>
              <p className="ml-4">- docker compose up -d</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Типовий CI/CD flow</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded font-bold mr-3">1</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">Push коду в Git</p>
                    <p className="text-xs text-gray-600">Розробник робить commit і push</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-green-500 text-white px-3 py-1 rounded font-bold mr-3">2</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">CI запускається</p>
                    <p className="text-xs text-gray-600">GitHub Actions / GitLab CI виявляє зміни</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded font-bold mr-3">3</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">Docker build</p>
                    <p className="text-xs text-gray-600">Збірка образу з Dockerfile</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded font-bold mr-3">4</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">Тестування</p>
                    <p className="text-xs text-gray-600">Запуск тестів у контейнері</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded font-bold mr-3">5</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">Push до registry</p>
                    <p className="text-xs text-gray-600">Образ завантажується в Docker Hub</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded font-bold mr-3">6</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">Deploy на production</p>
                    <p className="text-xs text-gray-600">Оновлення контейнерів на серверах</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">✅ Переваги Docker у CI/CD</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
              <p>• Однакове середовище (dev = CI = prod)</p>
              <p>• Швидка збірка (cache шарів)</p>
              <p>• Ізоляція тестів</p>
              <p>• Легкий rollback</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Мікросервіси",
      subtitle: "Docker для мікросервісної архітектури",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Boxes className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Мікросервіси з Docker</h3>
            <p className="text-center text-xl">
              Кожен сервіс = окремий контейнер
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Що таке мікросервіси?</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-800 mb-3">Монолітна архітектура:</p>
                <div className="bg-white p-4 rounded shadow border-4 border-gray-400">
                  <div className="bg-gray-200 p-3 text-center mb-2">Auth</div>
                  <div className="bg-gray-200 p-3 text-center mb-2">Users</div>
                  <div className="bg-gray-200 p-3 text-center mb-2">Products</div>
                  <div className="bg-gray-200 p-3 text-center mb-2">Orders</div>
                  <div className="bg-gray-400 p-3 text-center text-white font-bold">ONE APP</div>
                </div>
                <p className="text-xs text-gray-600 mt-2">❌ Все в одному додатку</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-3">Мікросервіси:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded text-center text-sm">Auth Service</div>
                  <div className="bg-green-100 border-2 border-green-400 p-3 rounded text-center text-sm">User Service</div>
                  <div className="bg-yellow-100 border-2 border-yellow-400 p-3 rounded text-center text-sm">Product Service</div>
                  <div className="bg-red-100 border-2 border-red-400 p-3 rounded text-center text-sm">Order Service</div>
                </div>
                <p className="text-xs text-gray-600 mt-2">✅ Окремі незалежні додатки</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Приклад: E-commerce платформа</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1 max-h-96 overflow-y-auto">
              <p className="text-yellow-300"># docker-compose.yml</p>
              <p className="text-green-400">services:</p>
              
              <p className="ml-2 text-blue-400">api-gateway:</p>
              <p className="ml-4">build: ./api-gateway</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "80:80"</p>
              
              <p className="ml-2 text-blue-400 mt-2">auth-service:</p>
              <p className="ml-4">build: ./auth-service</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- JWT_SECRET=secret</p>
              
              <p className="ml-2 text-blue-400 mt-2">user-service:</p>
              <p className="ml-4">build: ./user-service</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- user-db</p>
              
              <p className="ml-2 text-blue-400 mt-2">product-service:</p>
              <p className="ml-4">build: ./product-service</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- product-db</p>
              
              <p className="ml-2 text-blue-400 mt-2">order-service:</p>
              <p className="ml-4">build: ./order-service</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- order-db</p>
              <p className="ml-6">- rabbitmq</p>
              
              <p className="ml-2 text-blue-400 mt-2">user-db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              
              <p className="ml-2 text-blue-400 mt-2">product-db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              
              <p className="ml-2 text-blue-400 mt-2">order-db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              
              <p className="ml-2 text-blue-400 mt-2">rabbitmq:</p>
              <p className="ml-4">image: rabbitmq:management</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "15672:15672"</p>
              
              <p className="ml-2 text-blue-400 mt-2">redis:</p>
              <p className="ml-4">image: redis:alpine</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">✅ Переваги Docker для мікросервісів</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🔒 Ізоляція</p>
                <p className="text-sm text-gray-700">Кожен сервіс у власному контейнері</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">📦 Незалежність</p>
                <p className="text-sm text-gray-700">Різні мови, фреймворки, версії</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">⚖️ Масштабування</p>
                <p className="text-sm text-gray-700">Масштабувати тільки потрібні сервіси</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🚀 Швидкий deploy</p>
                <p className="text-sm text-gray-700">Оновлюй один сервіс, не весь додаток</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Комунікація між сервісами</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800 mb-2">REST API (HTTP)</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>{'// З auth-service викликати user-service'}</p>
                  <p>fetch('http://user-service:3000/users/123')</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800 mb-2">Message Queue (RabbitMQ/Kafka)</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>// Order service публікує event</p>
                  <p>queue.publish('order.created', orderData)</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-gray-800 mb-2">gRPC (для швидкої комунікації)</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  <p>client.GetUser(userId)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-800 mb-3">⚠️ Виклики</h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-800">
              <p>• Складніша архітектура</p>
              <p>• Моніторинг багатьох сервісів</p>
              <p>• Мережева затримка</p>
              <p>• Distributed transactions</p>
            </div>
            <p className="text-sm text-gray-800 mt-3">
              <strong>Рішення:</strong> Kubernetes для оркестрації!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Тестування з Docker",
      subtitle: "Ізольовані та повторювані тести",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <TestTube className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Testing with Docker</h3>
            <p className="text-center text-xl">
              Чисте середовище для кожного тесту
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">✅ Переваги тестування в Docker</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🔄 Повторюваність</p>
                <p className="text-sm text-gray-700">Той самий тест завжди в тому самому оточенні</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🧹 Ізоляція</p>
                <p className="text-sm text-gray-700">Кожен тест у свіжому контейнері</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">⚡ Паралельність</p>
                <p className="text-sm text-gray-700">Запускай кілька тестів одночасно</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-bold text-green-700 mb-2">🗄️ Реальна БД</p>
                <p className="text-sm text-gray-700">Тестуй з PostgreSQL, не моками</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Unit тести в контейнері</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-800 mb-3">Dockerfile для тестів:</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                  <p>FROM node:18-alpine</p>
                  <p>WORKDIR /app</p>
                  <p>COPY package*.json ./</p>
                  <p>RUN npm ci</p>
                  <p>COPY . .</p>
                  <p>CMD ["npm", "test"]</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-3">Запуск тестів:</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                  <p className="text-gray-400"># Build test image</p>
                  <p>docker build -t myapp:test .</p>
                  
                  <p className="text-gray-400 mt-3"># Run tests</p>
                  <p>docker run --rm myapp:test</p>
                  
                  <p className="text-gray-400 mt-3"># З volume для coverage</p>
                  <p>docker run --rm -v $(pwd)/coverage:/app/coverage \</p>
                  <p className="ml-4">myapp:test</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Інтеграційні тести з БД</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
              <p className="text-yellow-300"># docker-compose.test.yml</p>
              <p className="text-green-400">services:</p>
              
              <p className="ml-2 text-blue-400">app:</p>
              <p className="ml-4">build: .</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- DATABASE_URL=postgresql://test-db:5432/test</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- test-db</p>
              <p className="ml-4">command: npm test</p>
              
              <p className="ml-2 text-blue-400 mt-2">test-db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- POSTGRES_PASSWORD=test</p>
              <p className="ml-6">- POSTGRES_DB=test</p>
              <p className="ml-4">tmpfs:</p>
              <p className="ml-6">- /var/lib/postgresql/data</p>
            </div>
            <div className="mt-4 bg-white p-3 rounded">
              <p className="text-sm font-semibold text-gray-800 mb-1">Запуск:</p>
              <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded">
                docker compose -f docker-compose.test.yml up --abort-on-container-exit
              </code>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">E2E (End-to-End) тести</h4>
            <div className="space-y-4">
              <p className="text-gray-800">
                Запуск всього стеку для тестування реального користувацького сценарію:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p>services:</p>
                <p className="ml-2">frontend:</p>
                <p className="ml-4">build: ./frontend</p>
                <p className="ml-2">backend:</p>
                <p className="ml-4">build: ./backend</p>
                <p className="ml-2">db:</p>
                <p className="ml-4">image: postgres:15-alpine</p>
                <p className="ml-2 text-yellow-300 mt-2">e2e-tests:</p>
                <p className="ml-4">build: ./e2e</p>
                <p className="ml-4">depends_on:</p>
                <p className="ml-6">- frontend</p>
                <p className="ml-6">- backend</p>
                <p className="ml-4">command: npx playwright test</p>
              </div>
              <div className="bg-white p-3 rounded text-sm text-gray-700">
                <p><strong>Інструменти:</strong> Selenium, Playwright, Cypress у контейнерах</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h4 className="text-xl font-bold text-orange-800 mb-4">Best Practices</h4>
            <div className="space-y-3 text-sm text-gray-800">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold mb-1">1. Використовуй tmpfs для тестової БД</p>
                <p className="text-xs text-gray-600">Швидше, не займає місце на диску</p>
              </div>
              
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold mb-1">2. --rm для автоматичного видалення</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">docker run --rm myapp:test</code>
              </div>
              
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold mb-1">3. Окремий docker-compose.test.yml</p>
                <p className="text-xs text-gray-600">Не плутай з development конфігом</p>
              </div>
              
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold mb-1">4. Паралельні тести</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">docker compose up --scale test-runner=4</code>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Результат:</strong> Тести виконуються в ізольованому середовищі, 
              яке ідентичне production. Немає "у мене тести пройшли" проблем!
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
            Слайд {currentSlide + 1} з {slides.length} | Частина 8: Практичні сценарії
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;