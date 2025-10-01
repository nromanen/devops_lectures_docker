import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Boxes, FileText, Play, Settings, Network } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Що таке Docker Compose?",
      subtitle: "Керування багатьма контейнерами",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Boxes className="w-24 h-24" />
            </div>
            <h3 className="text-3xl font-bold text-center mb-4">Docker Compose</h3>
            <p className="text-center text-xl">
              Інструмент для визначення та запуску multi-container додатків
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <h4 className="text-xl font-bold text-red-800 mb-4">😓 Проблема без Compose</h4>
            <p className="text-gray-800 mb-4">
              Уявіть додаток з веб-сервером, базою даних та Redis:
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-2">
              <p className="text-gray-400"># Створити мережу</p>
              <p>docker network create myapp-network</p>
              
              <p className="text-gray-400 mt-3"># Запустити базу даних</p>
              <p>docker run -d --name db --network myapp-network \</p>
              <p className="ml-4">-e POSTGRES_PASSWORD=secret \</p>
              <p className="ml-4">-v pgdata:/var/lib/postgresql/data \</p>
              <p className="ml-4">postgres:15</p>
              
              <p className="text-gray-400 mt-3"># Запустити Redis</p>
              <p>docker run -d --name redis --network myapp-network redis:alpine</p>
              
              <p className="text-gray-400 mt-3"># Запустити веб-додаток</p>
              <p>docker run -d --name web --network myapp-network \</p>
              <p className="ml-4">-p 3000:3000 \</p>
              <p className="ml-4">-e DATABASE_URL=postgresql://db:5432 \</p>
              <p className="ml-4">myapp:latest</p>
            </div>
            <div className="bg-red-100 p-4 rounded mt-4">
              <p className="text-sm text-red-800">
                <strong>😱 Проблеми:</strong> Багато команд, складно запам'ятати, 
                важко поділитися з командою, треба запускати по черзі
              </p>
            </div>
          </div>

          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🐳 Docker → Docker Compose
          </h1>
          <p className="text-gray-600">Міграція з окремих команд до одного YAML файлу</p>
        </div>

        {/* Docker Commands */}
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 shadow-md">
          <h3 className="text-xl font-bold text-red-800 mb-4">❌ Було: Багато команд Docker</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-2">
            <p className="text-yellow-300"># Створити мережу</p>
            <p>docker network create myapp-network</p>
            <p className="text-yellow-300 mt-3"># Запустити базу даних</p>
            <p>docker run -d --name db --network myapp-network \</p>
            <p className="ml-4">-e POSTGRES_PASSWORD=secret \</p>
            <p className="ml-4">-v pgdata:/var/lib/postgresql/data \</p>
            <p className="ml-4">postgres:15</p>
            <p className="text-yellow-300 mt-3"># Запустити Redis</p>
            <p>docker run -d --name redis --network myapp-network redis:alpine</p>
            <p className="text-yellow-300 mt-3"># Запустити веб-додаток</p>
            <p>docker run -d --name web --network myapp-network \</p>
            <p className="ml-4">-p 3000:3000 \</p>
            <p className="ml-4">-e DATABASE_URL=postgresql://db:5432 \</p>
            <p className="ml-4">myapp:latest</p>
          </div>
        </div>

        {/* Docker Compose Solution */}
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300 shadow-md">
          <h3 className="text-xl font-bold text-green-800 mb-4">✅ Стало: Docker Compose</h3>
          <p className="text-gray-800 mb-4">
            Всі налаштування в одному YAML файлі:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-1 overflow-x-auto">
            <p className="text-yellow-300"># docker-compose.yml</p>
            <p className="text-purple-400">version: <span className="text-green-400">'3.8'</span></p>
            <p className="mt-2"></p>
            <p className="text-purple-400">services:</p>
            <p className="ml-4 text-blue-400">db:</p>
            <p className="ml-8 text-purple-400">image: <span className="text-green-400">postgres:15</span></p>
            <p className="ml-8 text-purple-400">container_name: <span className="text-green-400">db</span></p>
            <p className="ml-8 text-purple-400">environment:</p>
            <p className="ml-12 text-purple-400">POSTGRES_PASSWORD: <span className="text-green-400">secret</span></p>
            <p className="ml-8 text-purple-400">volumes:</p>
            <p className="ml-12">- pgdata:/var/lib/postgresql/data</p>
            <p className="ml-8 text-purple-400">networks:</p>
            <p className="ml-12">- myapp-network</p>
            <p className="mt-2"></p>
            <p className="ml-4 text-blue-400">redis:</p>
            <p className="ml-8 text-purple-400">image: <span className="text-green-400">redis:alpine</span></p>
            <p className="ml-8 text-purple-400">container_name: <span className="text-green-400">redis</span></p>
            <p className="ml-8 text-purple-400">networks:</p>
            <p className="ml-12">- myapp-network</p>
            <p className="mt-2"></p>
            <p className="ml-4 text-blue-400">web:</p>
            <p className="ml-8 text-purple-400">image: <span className="text-green-400">myapp:latest</span></p>
            <p className="ml-8 text-purple-400">container_name: <span className="text-green-400">web</span></p>
            <p className="ml-8 text-purple-400">ports:</p>
            <p className="ml-12">- <span className="text-green-400">"3000:3000"</span></p>
            <p className="ml-8 text-purple-400">environment:</p>
            <p className="ml-12 text-purple-400">DATABASE_URL: <span className="text-green-400">postgresql://db:5432</span></p>
            <p className="ml-8 text-purple-400">networks:</p>
            <p className="ml-12">- myapp-network</p>
            <p className="ml-8 text-purple-400">depends_on:</p>
            <p className="ml-12">- db</p>
            <p className="ml-12">- redis</p>
            <p className="mt-2"></p>
            <p className="text-purple-400">networks:</p>
            <p className="ml-4 text-blue-400">myapp-network:</p>
            <p className="ml-8 text-purple-400">driver: <span className="text-green-400">bridge</span></p>
            <p className="mt-2"></p>
            <p className="text-purple-400">volumes:</p>
            <p className="ml-4 text-blue-400">pgdata:</p>
          </div>
        </div>

        {/* Mapping Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🔄 Відповідність команд</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-blue-700 px-4 py-3 text-left">Docker команда</th>
                  <th className="border border-blue-700 px-4 py-3 text-left">Docker Compose</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">docker network create myapp-network</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">networks: myapp-network:</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">-d (detached)</td>
                  <td className="border border-gray-300 px-4 py-2">За замовчуванням в compose</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">--name db</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">container_name: db</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">--network myapp-network</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">networks: - myapp-network</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">-e POSTGRES_PASSWORD=secret</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">environment: POSTGRES_PASSWORD: secret</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">-v pgdata:/var/lib/postgresql/data</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">volumes: - pgdata:/var/lib/postgresql/data</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">-p 3000:3000</td>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-xs">ports: - "3000:3000"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commands */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-800 mb-4">🚀 Запуск одною командою</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Запустити все:</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                docker compose up -d
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Подивитись логи:</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                docker compose logs -f
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Зупинити все:</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                docker compose down
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Зупинити і видалити volumes:</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                docker compose down -v
              </div>
            </div>
          </div>
        </div>

        {/* Build Example */}
        <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300 shadow-md">
          <h3 className="text-xl font-bold text-orange-800 mb-4">🔨 Бонус: build - Збудувати з Dockerfile</h3>
          <p className="text-gray-800 mb-4">
            Замість готового image, можна збудувати власний:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm space-y-1">
            <p className="text-yellow-300"># docker-compose.yml</p>
            <p className="text-purple-400">services:</p>
            <p className="ml-4 text-blue-400">web:</p>
            <p className="ml-8 text-purple-400">build: <span className="text-green-400">.</span> <span className="text-gray-500"># Збудувати з Dockerfile в поточній директорії</span></p>
            <p className="ml-8 text-purple-400">ports:</p>
            <p className="ml-12">- <span className="text-green-400">"3000:3000"</span></p>
            <p className="mt-2"></p>
            <p className="ml-4 text-gray-500"># АБО з налаштуваннями:</p>
            <p className="ml-4 text-blue-400">app:</p>
            <p className="ml-8 text-purple-400">build:</p>
            <p className="ml-12 text-purple-400">context: <span className="text-green-400">./app</span> <span className="text-gray-500"># Де шукати Dockerfile</span></p>
            <p className="ml-12 text-purple-400">dockerfile: <span className="text-green-400">Dockerfile.prod</span> <span className="text-gray-500"># Який Dockerfile використати</span></p>
          </div>
          <div className="bg-white p-4 rounded mt-4 border-l-4 border-orange-500">
            <p className="text-sm font-bold text-orange-800 mb-2">Запуск зі збіркою:</p>
            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
              docker compose up --build
            </div>
            <p className="text-xs text-gray-600 mt-2">Docker Compose автоматично збудує image перед запуском</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-md border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 mb-4">💡 Переваги Docker Compose</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-purple-700 mb-1">✅ Простота</p>
              <p className="text-sm text-gray-600">Всі налаштування в одному файлі</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-purple-700 mb-1">✅ Версіонування</p>
              <p className="text-sm text-gray-600">YAML файл зберігається в Git</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-purple-700 mb-1">✅ Відтворюваність</p>
              <p className="text-sm text-gray-600">Однакове середовище для всіх</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-semibold text-purple-700 mb-1">✅ Залежності</p>
              <p className="text-sm text-gray-600">depends_on контролює порядок запуску</p>
            </div>
          </div>
        </div>
      </div>
    </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Що він робить?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Описує всі сервіси в одному файлі</li>
                <li>✅ Автоматично створює мережі</li>
                <li>✅ Керує volumes</li>
                <li>✅ Запускає все одночасно</li>
                <li>✅ Легко масштабувати</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-lg font-bold text-purple-800 mb-4">Переваги</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🚀 Швидкий старт проекту</li>
                <li>📝 Документація інфраструктури</li>
                <li>👥 Легко поділитися з командою</li>
                <li>🔄 Повторюваність середовища</li>
                <li>💻 Ідеально для розробки</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Важливо:</strong> Docker Compose ідеальний для розробки та тестування. 
              Для production використовуйте Kubernetes або Docker Swarm
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Структура docker-compose.yml",
      subtitle: "Основні секції та синтаксис",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <div className="flex items-center mb-4">
              <FileText className="w-12 h-12 text-purple-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-purple-800">docker-compose.yml</h3>
                <p className="text-gray-700">YAML файл з конфігурацією</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Базова структура</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-sm space-y-2">
              <p className="text-yellow-300"># Версія Compose (опціонально з v2)</p>
              <p className="text-green-400">version: '3.8'</p>
              
              <p className="text-yellow-300 mt-4"># Головна секція - сервіси (контейнери)</p>
              <p className="text-green-400">services:</p>
              <p className="ml-2 text-blue-400">web:</p>
              <p className="ml-4 text-gray-300">image: nginx</p>
              <p className="ml-4 text-gray-300">ports:</p>
              <p className="ml-6 text-gray-300">- "80:80"</p>
              
              <p className="ml-2 text-blue-400 mt-3">db:</p>
              <p className="ml-4 text-gray-300">image: postgres</p>
              
              <p className="text-yellow-300 mt-4"># Volumes (опціонально)</p>
              <p className="text-green-400">volumes:</p>
              <p className="ml-2 text-gray-300">pgdata:</p>
              
              <p className="text-yellow-300 mt-4"># Networks (опціонально)</p>
              <p className="text-green-400">networks:</p>
              <p className="ml-2 text-gray-300">mynetwork:</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-3">services:</h4>
              <p className="text-sm text-gray-700 mb-3">Список контейнерів</p>
              <div className="bg-white p-3 rounded text-xs font-mono">
                <p>services:</p>
                <p className="ml-2">web:</p>
                <p className="ml-4">...</p>
                <p className="ml-2">db:</p>
                <p className="ml-4">...</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Кожен сервіс = один контейнер
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
              <h4 className="text-lg font-bold text-green-800 mb-3">volumes:</h4>
              <p className="text-sm text-gray-700 mb-3">Named volumes</p>
              <div className="bg-white p-3 rounded text-xs font-mono">
                <p>volumes:</p>
                <p className="ml-2">pgdata:</p>
                <p className="ml-2">logs:</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Визначення volumes для даних
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
              <h4 className="text-lg font-bold text-purple-800 mb-3">networks:</h4>
              <p className="text-sm text-gray-700 mb-3">Власні мережі</p>
              <div className="bg-white p-3 rounded text-xs font-mono">
                <p>networks:</p>
                <p className="ml-2">frontend:</p>
                <p className="ml-2">backend:</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                Ізоляція між сервісами
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h4 className="text-xl font-bold text-orange-800 mb-4">Опції для сервісу</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">image:</p>
                  <p className="text-xs text-gray-600">Який образ використовувати</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">build:</p>
                  <p className="text-xs text-gray-600">Збудувати з Dockerfile</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">ports:</p>
                  <p className="text-xs text-gray-600">Перенаправлення портів</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">volumes:</p>
                  <p className="text-xs text-gray-600">Підключення volumes</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">environment:</p>
                  <p className="text-xs text-gray-600">Змінні оточення</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">depends_on:</p>
                  <p className="text-xs text-gray-600">Залежності між сервісами</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">networks:</p>
                  <p className="text-xs text-gray-600">До яких мереж підключити</p>
                </div>
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-sm text-orange-600 mb-1">restart:</p>
                  <p className="text-xs text-gray-600">Політика перезапуску</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Починайте з простого docker-compose.yml і поступово додавайте опції
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Приклад: Веб-додаток + База даних",
      subtitle: "Повний docker-compose.yml",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-2">Node.js + PostgreSQL + Redis</h3>
            <p className="text-center text-gray-700">Типовий стек для веб-додатку</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">docker-compose.yml</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1 overflow-x-auto">
              <p className="text-green-400">services:</p>
              
              <p className="text-yellow-300 mt-3"># Веб-додаток</p>
              <p className="ml-2 text-blue-400">web:</p>
              <p className="ml-4">build: .</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "3000:3000"</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- NODE_ENV=development</p>
              <p className="ml-6">- DATABASE_URL=postgresql://user:password@db:5432/myapp</p>
              <p className="ml-6">- REDIS_URL=redis://redis:6379</p>
              <p className="ml-4">volumes:</p>
              <p className="ml-6">- ./src:/app/src</p>
              <p className="ml-4">depends_on:</p>
              <p className="ml-6">- db</p>
              <p className="ml-6">- redis</p>
              
              <p className="text-yellow-300 mt-3"># База даних PostgreSQL</p>
              <p className="ml-2 text-blue-400">db:</p>
              <p className="ml-4">image: postgres:15-alpine</p>
              <p className="ml-4">environment:</p>
              <p className="ml-6">- POSTGRES_USER=user</p>
              <p className="ml-6">- POSTGRES_PASSWORD=password</p>
              <p className="ml-6">- POSTGRES_DB=myapp</p>
              <p className="ml-4">volumes:</p>
              <p className="ml-6">- pgdata:/var/lib/postgresql/data</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "5432:5432"</p>
              
              <p className="text-yellow-300 mt-3"># Redis для кешування</p>
              <p className="ml-2 text-blue-400">redis:</p>
              <p className="ml-4">image: redis:alpine</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "6379:6379"</p>
              
              <p className="text-yellow-300 mt-3"># Volumes</p>
              <p className="text-green-400">volumes:</p>
              <p className="ml-2">pgdata:</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-3">🌐 web</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• build: . (Dockerfile в папці)</li>
                <li>• ports: 3000:3000</li>
                <li>• volumes: для hot reload</li>
                <li>• depends_on: чекає db і redis</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="text-lg font-bold text-green-800 mb-3">🗄️ db</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• postgres:15-alpine</li>
                <li>• env: логін/пароль/БД</li>
                <li>• volume: pgdata (дані)</li>
                <li>• port: 5432 (опціонально)</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="text-lg font-bold text-red-800 mb-3">⚡ redis</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• redis:alpine</li>
                <li>• Для кешування</li>
                <li>• Без persistent storage</li>
                <li>• port: 6379</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Як працює depends_on?</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-800">
                <code className="bg-gray-200 px-2 py-1 rounded">depends_on</code> визначає порядок запуску:
              </p>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center">
                    <div className="bg-green-100 border-2 border-green-500 rounded-lg p-3 mb-2">
                      <p className="font-bold text-green-800">1. db</p>
                    </div>
                    <p className="text-xs text-gray-600">Запускається першою</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="bg-red-100 border-2 border-red-500 rounded-lg p-3 mb-2">
                      <p className="font-bold text-red-800">2. redis</p>
                    </div>
                    <p className="text-xs text-gray-600">Паралельно з db</p>
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="text-center">
                    <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 mb-2">
                      <p className="font-bold text-blue-800">3. web</p>
                    </div>
                    <p className="text-xs text-gray-600">Після db та redis</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-100 p-3 rounded text-xs text-yellow-800">
                <p><strong>⚠️ Важливо:</strong> depends_on чекає тільки запуску контейнера, НЕ готовності сервісу!</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-3">🚀 Використання</h4>
            <div className="bg-black bg-opacity-30 p-3 rounded font-mono text-sm space-y-2">
              <p className="text-yellow-300"># Запустити все</p>
              <p>docker compose up</p>
              
              <p className="text-yellow-300 mt-3"># У фоновому режимі</p>
              <p>docker compose up -d</p>
              
              <p className="text-yellow-300 mt-3"># Зупинити все</p>
              <p>docker compose down</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Основні команди Docker Compose",
      subtitle: "up, down, ps, logs, exec",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <Play className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-center">Команди Docker Compose</h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">docker compose up</h4>
              <p className="text-sm text-gray-700 mb-3">Створює та запускає всі сервіси</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Запустити (у foreground)</p>
                <p>docker compose up</p>
                
                <p className="text-gray-400 mt-3"># У фоновому режимі</p>
                <p>docker compose up -d</p>
                
                <p className="text-gray-400 mt-3"># З пересборкою образів</p>
                <p>docker compose up --build</p>
                
                <p className="text-gray-400 mt-3"># Тільки один сервіс</p>
                <p>docker compose up web</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-red-800 mb-4">docker compose down</h4>
              <p className="text-sm text-gray-700 mb-3">Зупиняє та видаляє контейнери</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Зупинити все</p>
                <p>docker compose down</p>
                
                <p className="text-gray-400 mt-3"># З видаленням volumes</p>
                <p>docker compose down -v</p>
                
                <p className="text-gray-400 mt-3"># З видаленням образів</p>
                <p>docker compose down --rmi all</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-800 mb-4">docker compose ps</h4>
              <p className="text-sm text-gray-700 mb-3">Список запущених сервісів</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Всі сервіси</p>
                <p>docker compose ps</p>
                
                <p className="text-gray-400 mt-3"># Тільки запущені</p>
                <p>docker compose ps --services</p>
                
                <p className="text-gray-400 mt-3"># З форматуванням</p>
                <p>docker compose ps -a</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4">docker compose logs</h4>
              <p className="text-sm text-gray-700 mb-3">Перегляд логів сервісів</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Всі логи</p>
                <p>docker compose logs</p>
                
                <p className="text-gray-400 mt-3"># Слідкувати (live)</p>
                <p>docker compose logs -f</p>
                
                <p className="text-gray-400 mt-3"># Тільки один сервіс</p>
                <p>docker compose logs web</p>
                
                <p className="text-gray-400 mt-3"># Останні 100 рядків</p>
                <p>docker compose logs --tail 100</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h4 className="text-xl font-bold text-orange-800 mb-4">docker compose exec</h4>
              <p className="text-sm text-gray-700 mb-3">Виконати команду в сервісі</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Відкрити bash</p>
                <p>docker compose exec web bash</p>
                
                <p className="text-gray-400 mt-3"># Підключитися до БД</p>
                <p>docker compose exec db psql -U user</p>
                
                <p className="text-gray-400 mt-3"># Запустити команду</p>
                <p>docker compose exec web npm test</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h4 className="text-xl font-bold text-yellow-800 mb-4">docker compose restart</h4>
              <p className="text-sm text-gray-700 mb-3">Перезапуск сервісів</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Перезапустити все</p>
                <p>docker compose restart</p>
                
                <p className="text-gray-400 mt-3"># Один сервіс</p>
                <p>docker compose restart web</p>
                
                <p className="text-gray-400 mt-3"># Кілька сервісів</p>
                <p>docker compose restart web db</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Типовий робочий процес</h4>
            <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm space-y-2">
              <p className="text-yellow-300"># 1. Створити docker-compose.yml</p>
              <p>vim docker-compose.yml</p>
              
              <p className="text-yellow-300 mt-3"># 2. Запустити сервіси</p>
              <p>docker compose up -d</p>
              
              <p className="text-yellow-300 mt-3"># 3. Подивитись логи</p>
              <p>docker compose logs -f web</p>
              
              <p className="text-yellow-300 mt-3"># 4. Перезапустити після змін</p>
              <p>docker compose restart web</p>
              
              <p className="text-yellow-300 mt-3"># 5. Зупинити все</p>
              <p>docker compose down</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Використовуйте <code className="bg-gray-200 px-2 py-1 rounded">docker compose logs -f</code> для debugging у реальному часі!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Мережі в Docker Compose",
      subtitle: "Автоматична та власна конфігурація",
      content: (
        <div className="space-y-6">
          <div className="bg-cyan-50 p-8 rounded-lg border-2 border-cyan-300">
            <div className="flex items-center justify-center mb-4">
              <Network className="w-16 h-16 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-800 text-center mb-2">Мережі у Compose</h3>
            <p className="text-center text-gray-700">Docker Compose автоматично створює мережу для ваших сервісів</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">✅ Автоматична мережа (за замовчуванням)</h4>
            <div className="space-y-4">
              <p className="text-gray-800">
                Docker Compose створює <strong>одну мережу</strong> для всіх сервісів автоматично
              </p>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800 mb-2">Що це означає?</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✅ Всі сервіси можуть спілкуватися між собою</li>
                  <li>✅ За іменем сервісу (web, db, redis)</li>
                  <li>✅ DNS працює автоматично</li>
                  <li>✅ Ізоляція від інших Compose проектів</li>
                </ul>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                <p className="text-yellow-300"># У сервісі web можна підключитися:</p>
                <p>const db = 'postgresql://db:5432/mydb'</p>
                <p>const redis = 'redis://redis:6379'</p>
                <p className="text-gray-400 mt-2"># 'db' та 'redis' - це імена сервісів!</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Власні мережі</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-800 mb-3">Навіщо потрібні?</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Розділення frontend та backend</li>
                  <li>• Ізоляція БД від зовнішніх сервісів</li>
                  <li>• Складні мікросервісні архітектури</li>
                </ul>
              </div>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-1">
                <p>services:</p>
                <p className="ml-2">web:</p>
                <p className="ml-4">networks:</p>
                <p className="ml-6">- frontend</p>
                <p className="ml-6">- backend</p>
                <p className="ml-2">db:</p>
                <p className="ml-4">networks:</p>
                <p className="ml-6">- backend</p>
                <p className="mt-2">networks:</p>
                <p className="ml-2">frontend:</p>
                <p className="ml-2">backend:</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Приклад: 3-рівнева архітектура</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
              <p className="text-green-400">services:</p>
              
              <p className="text-yellow-300 mt-2"># Nginx (публічний)</p>
              <p className="ml-2 text-blue-400">nginx:</p>
              <p className="ml-4">image: nginx</p>
              <p className="ml-4">ports:</p>
              <p className="ml-6">- "80:80"</p>
              <p className="ml-4 text-purple-400">networks:</p>
              <p className="ml-6 text-purple-400">- frontend</p>
              
              <p className="text-yellow-300 mt-2"># API (середній рівень)</p>
              <p className="ml-2 text-blue-400">api:</p>
              <p className="ml-4">build: ./api</p>
              <p className="ml-4 text-purple-400">networks:</p>
              <p className="ml-6 text-purple-400">- frontend</p>
              <p className="ml-6 text-purple-400">- backend</p>
              
              <p className="text-yellow-300 mt-2"># База даних (приватна)</p>
              <p className="ml-2 text-blue-400">db:</p>
              <p className="ml-4">image: postgres</p>
              <p className="ml-4 text-purple-400">networks:</p>
              <p className="ml-6 text-purple-400">- backend</p>
              
              <p className="text-green-400 mt-3">networks:</p>
              <p className="ml-2">frontend:</p>
              <p className="ml-2">backend:</p>
            </div>
            
            <div className="mt-4 bg-white p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">Ізоляція:</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>✅ nginx → api (frontend мережа)</p>
                <p>✅ api → db (backend мережа)</p>
                <p>❌ nginx ❌→ db (різні мережі!)</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Додаткові опції мереж</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
              <p>networks:</p>
              <p className="ml-2">mynetwork:</p>
              <p className="ml-4 text-blue-400">driver: bridge</p>
              <p className="ml-4 text-blue-400">ipam:</p>
              <p className="ml-6">config:</p>
              <p className="ml-8">- subnet: 172.20.0.0/16</p>
              <p className="ml-4 text-blue-400">driver_opts:</p>
              <p className="ml-6">com.docker.network.bridge.name: my-bridge</p>
            </div>
            <p className="text-sm text-gray-700 mt-3">
              Можна налаштувати підмережу, драйвер та інші параметри
            </p>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">💡 Best Practices</h4>
            <div className="space-y-2 text-sm text-gray-800">
              <p>• Для простих проектів — використовуйте автоматичну мережу</p>
              <p>• Для складних — створюйте окремі мережі frontend/backend</p>
              <p>• База даних завжди має бути у приватній мережі</p>
              <p>• Використовуйте імена сервісів замість IP адрес</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Масштабування та змінні оточення",
      subtitle: "scale, .env файли",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <div className="flex items-center mb-4">
              <Settings className="w-12 h-12 text-orange-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-orange-800">Додаткові можливості</h3>
                <p className="text-gray-700">Масштабування та конфігурація</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Масштабування сервісів</h4>
            <div className="space-y-4">
              <p className="text-gray-800">
                Можна запустити кілька екземплярів одного сервісу:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm space-y-2">
                <p className="text-gray-400"># Запустити 3 екземпляри worker</p>
                <p>docker compose up -d --scale worker=3</p>
                
                <p className="text-gray-400 mt-3"># Перевірити</p>
                <p>docker compose ps</p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Використання:</strong> Обробка черг, воркери, background jobs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-xl font-bold text-green-800 mb-4">.env файли</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-800 mb-3">Створіть .env файл:</p>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                  <p className="text-yellow-300"># .env</p>
                  <p>POSTGRES_USER=myuser</p>
                  <p>POSTGRES_PASSWORD=secret123</p>
                  <p>POSTGRES_DB=production</p>
                  <p>NODE_ENV=production</p>
                  <p>PORT=3000</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-3">Використання в compose:</p>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                  <p>services:</p>
                  <p className="ml-2">db:</p>
                  <p className="ml-4">environment:</p>
                  <p className="ml-6">- POSTGRES_USER=${"{POSTGRES_USER}"}</p>
                  <p className="ml-6">- POSTGRES_PASSWORD=${"{POSTGRES_PASSWORD}"}</p>
                  <p className="ml-2">web:</p>
                  <p className="ml-4">environment:</p>
                  <p className="ml-6">- NODE_ENV=${"{NODE_ENV}"}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded mt-4">
              <p className="text-sm text-gray-700">
                <strong>✅ Перевага:</strong> Чутливі дані в .env, а не в docker-compose.yml
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">env_file опція</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs space-y-1">
                  <p>services:</p>
                  <p className="ml-2">web:</p>
                  <p className="ml-4">env_file:</p>
                  <p className="ml-6">- .env</p>
                  <p className="ml-6">- .env.production</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  Завантажує всі змінні з файлу автоматично
                </p>
                <div className="bg-white p-3 rounded mt-3 text-xs">
                  <p className="font-semibold mb-1">Можна використовувати:</p>
                  <p>• .env (за замовчуванням)</p>
                  <p>• .env.local</p>
                  <p>• .env.production</p>
                  <p>• custom.env</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Profiles (групи сервісів)</h4>
            <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
              <p className="text-green-400">services:</p>
              <p className="ml-2 text-blue-400">web:</p>
              <p className="ml-4">image: myapp</p>
              <p className="ml-4 text-yellow-300"># Завжди запускається</p>
              
              <p className="ml-2 text-blue-400 mt-3">debug:</p>
              <p className="ml-4">image: debug-tools</p>
              <p className="ml-4 text-purple-400">profiles:</p>
              <p className="ml-6 text-purple-400">- debug</p>
              
              <p className="ml-2 text-blue-400 mt-3">monitoring:</p>
              <p className="ml-4">image: prometheus</p>
              <p className="ml-4 text-purple-400">profiles:</p>
              <p className="ml-6 text-purple-400">- monitoring</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="bg-white p-3 rounded font-mono text-xs">
                <p className="text-gray-600 mb-1"># Тільки основні сервіси</p>
                <p>docker compose up</p>
              </div>
              <div className="bg-white p-3 rounded font-mono text-xs">
                <p className="text-gray-600 mb-1"># З debug сервісами</p>
                <p>docker compose --profile debug up</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">🎯 Практичний приклад</h4>
            <div className="bg-black bg-opacity-30 p-4 rounded space-y-3 text-sm">
              <div>
                <p className="font-bold mb-2">Структура проекту:</p>
                <div className="font-mono text-xs space-y-1">
                  <p>myproject/</p>
                  <p className="ml-2">├── docker-compose.yml</p>
                  <p className="ml-2">├── docker-compose.prod.yml</p>
                  <p className="ml-2">├── .env</p>
                  <p className="ml-2">├── .env.production</p>
                  <p className="ml-2">└── .dockerignore</p>
                </div>
              </div>
              <div>
                <p className="font-bold mb-2">Workflow:</p>
                <div className="font-mono text-xs space-y-1">
                  <p># Development</p>
                  <p>docker compose up</p>
                  <p className="mt-2"># Production</p>
                  <p>docker compose -f docker-compose.yml \</p>
                  <p className="ml-4">-f docker-compose.prod.yml up -d</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">🔒 Безпека</h4>
            <div className="space-y-2 text-sm text-gray-800">
              <p>• Додайте .env до .gitignore</p>
              <p>• Використовуйте .env.example для документації</p>
              <p>• Ніколи не коммітьте паролі в docker-compose.yml</p>
              <p>• Для production використовуйте Docker secrets</p>
            </div>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
            <p className="text-xl text-cyan-100">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="p-12 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

          <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                    currentSlide === index ? 'bg-cyan-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              Вперед
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-gray-100 px-8 py-3 text-center text-gray-600">
            Слайд {currentSlide + 1} з {slides.length} | Частина 7: Docker Compose
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;