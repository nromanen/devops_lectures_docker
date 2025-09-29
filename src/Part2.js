import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Box, Layers, Server, HardDrive, Network, Database } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Контейнери vs Віртуальні машини",
      subtitle: "У чому різниця?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Virtual Machines */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-700 text-center mb-6">Віртуальні машини</h3>
              <div className="bg-white border-4 border-purple-300 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="bg-blue-200 p-3 rounded text-center font-semibold">App A</div>
                  <div className="bg-green-200 p-3 rounded text-center font-semibold">App B</div>
                  <div className="bg-yellow-200 p-3 rounded text-center font-semibold">App C</div>
                  <div className="bg-orange-300 p-4 rounded text-center font-bold">Guest OS</div>
                  <div className="bg-orange-300 p-4 rounded text-center font-bold">Guest OS</div>
                  <div className="bg-orange-300 p-4 rounded text-center font-bold">Guest OS</div>
                  <div className="bg-red-400 p-4 rounded text-center font-bold text-white">Hypervisor</div>
                  <div className="bg-gray-700 p-4 rounded text-center font-bold text-white">Host OS</div>
                  <div className="bg-gray-900 p-4 rounded text-center font-bold text-white">Infrastructure</div>
                </div>
              </div>
            </div>

            {/* Containers */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-700 text-center mb-6">Docker Контейнери</h3>
              <div className="bg-white border-4 border-blue-300 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="bg-blue-200 p-3 rounded text-center font-semibold">App A</div>
                  <div className="bg-green-200 p-3 rounded text-center font-semibold">App B</div>
                  <div className="bg-yellow-200 p-3 rounded text-center font-semibold">App C</div>
                  <div className="bg-blue-400 p-6 rounded text-center font-bold text-white">Docker Engine</div>
                  <div className="bg-gray-700 p-4 rounded text-center font-bold text-white">Host OS</div>
                  <div className="bg-gray-900 p-4 rounded text-center font-bold text-white">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
              <p className="font-bold text-purple-800 mb-2">VM:</p>
              <p className="text-sm text-gray-700">Кожна VM має повну ОС, важка, повільний старт</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <p className="font-bold text-blue-800 mb-2">Контейнер:</p>
              <p className="text-sm text-gray-700">Спільна ОС, легкий, швидкий старт (секунди)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Порівняння: VM vs Контейнери",
      subtitle: "Детальна таблиця відмінностей",
      content: (
        <div className="space-y-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border-2 border-gray-600 p-4 text-left">Характеристика</th>
                <th className="border-2 border-gray-600 p-4 text-center bg-purple-600">Віртуальні машини</th>
                <th className="border-2 border-gray-600 p-4 text-center bg-blue-600">Docker контейнери</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-gray-300 p-4 font-semibold">Розмір</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">ГБ (гігабайти)</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">МБ (мегабайти)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-300 p-4 font-semibold">Час запуску</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">Хвилини</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">Секунди</td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-gray-300 p-4 font-semibold">Ізоляція</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">Повна (своя ОС)</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">На рівні процесів</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-300 p-4 font-semibold">Продуктивність</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">Менша (overhead)</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">Майже нативна</td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-gray-300 p-4 font-semibold">Портативність</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">Обмежена</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">Висока</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-300 p-4 font-semibold">Використання ресурсів</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-purple-50">Високе</td>
                <td className="border-2 border-gray-300 p-4 text-center bg-blue-50">Низьке</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-6">
            <p className="text-lg text-green-900">
              <strong>Висновок:</strong> Контейнери ідеальні для мікросервісів, швидкого розгортання та ефективного використання ресурсів!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Docker Architecture",
      subtitle: "Як працює Docker?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-2 border-blue-300">
              <div className="flex justify-center mb-4">
                <Server className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 text-center mb-3">Docker Client</h3>
              <p className="text-gray-700 text-center">Інтерфейс для користувача. Через нього ви віддаєте команди</p>
              <div className="mt-4 bg-white p-3 rounded text-sm font-mono text-center">
                docker run<br/>docker build<br/>docker push
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg border-2 border-green-300">
              <div className="flex justify-center mb-4">
                <Box className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800 text-center mb-3">Docker Daemon</h3>
              <p className="text-gray-700 text-center">Серверна частина. Виконує всю роботу: запускає контейнери, керує образами</p>
              <div className="mt-4 bg-white p-3 rounded text-sm text-center">
                dockerd
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg border-2 border-purple-300">
              <div className="flex justify-center mb-4">
                <Database className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 text-center mb-3">Docker Registry</h3>
              <p className="text-gray-700 text-center">Сховище образів. Docker Hub — публічний реєстр</p>
              <div className="mt-4 bg-white p-3 rounded text-sm text-center font-semibold">
                hub.docker.com
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 mt-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Як вони взаємодіють?</h4>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-blue-100 px-6 py-3 rounded-lg font-semibold text-blue-800">Client</div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="bg-green-100 px-6 py-3 rounded-lg font-semibold text-green-800">Daemon</div>
              <div className="text-3xl text-gray-400">↔</div>
              <div className="bg-purple-100 px-6 py-3 rounded-lg font-semibold text-purple-800">Registry</div>
            </div>
            <p className="text-center text-gray-600 mt-4">Client надсилає команди → Daemon виконує → Registry зберігає/надає образи</p>
          </div>
        </div>
      )
    },
    {
      title: "Docker Image (Образ)",
      subtitle: "Шаблон для створення контейнерів",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Що таке Docker Image?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Docker Image</strong> — це read-only шаблон, який містить інструкції для створення контейнера. 
              Образ включає все необхідне: код, бібліотеки, залежності, конфігурацію.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Layers className="w-8 h-8 text-orange-600 mr-3" />
                <h4 className="text-xl font-bold text-orange-800">Шари (Layers)</h4>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded text-center">Layer 5: Код додатку</div>
                <div className="bg-gray-200 p-3 rounded text-center">Layer 4: Залежності</div>
                <div className="bg-gray-300 p-3 rounded text-center">Layer 3: Python/Node.js</div>
                <div className="bg-gray-400 p-3 rounded text-center text-white">Layer 2: Бібліотеки ОС</div>
                <div className="bg-gray-600 p-3 rounded text-center text-white">Layer 1: Base OS (Ubuntu)</div>
              </div>
              <p className="text-sm text-gray-600 mt-4">Кожен шар — це зміни відносно попереднього</p>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
                <h4 className="text-lg font-bold text-green-800 mb-3">✅ Переваги шарів:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Кешування:</strong> незмінені шари не перебудовуються</li>
                  <li>• <strong>Економія місця:</strong> спільні шари використовуються разом</li>
                  <li>• <strong>Швидкість:</strong> завантажуються тільки нові шари</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h4 className="text-lg font-bold text-blue-800 mb-3">🏷️ Теги образів:</h4>
                <div className="space-y-2 font-mono text-sm">
                  <div className="bg-white p-2 rounded">node:18-alpine</div>
                  <div className="bg-white p-2 rounded">python:3.11-slim</div>
                  <div className="bg-white p-2 rounded">nginx:latest</div>
                </div>
                <p className="text-sm text-gray-600 mt-3">назва:версія</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Docker Container (Контейнер)",
      subtitle: "Запущений екземпляр образу",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Що таке Docker Container?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Docker Container</strong> — це запущений екземпляр образу. Це ізольоване середовище, 
              в якому працює ваш додаток. Контейнер можна запустити, зупинити, видалити. Контейнер — це образ + один додатковий шар зверху (writable).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Життєвий цикл контейнера</h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="bg-blue-500 text-white w-32 h-32 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                  Created
                </div>
                <p className="text-sm text-gray-600">Створений</p>
              </div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-green-500 text-white w-32 h-32 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                  Running
                </div>
                <p className="text-sm text-gray-600">Запущений</p>
              </div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white w-32 h-32 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                  Paused
                </div>
                <p className="text-sm text-gray-600">Призупинений</p>
              </div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-red-500 text-white w-32 h-32 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                  Stopped
                </div>
                <p className="text-sm text-gray-600">Зупинений</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Image vs Container</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-blue-700">Image:</p>
                  <p className="text-sm text-gray-700">Шаблон (клас в ООП)</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-green-700">Container:</p>
                  <p className="text-sm text-gray-700">Екземпляр (об'єкт в ООП)</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
              <h4 className="text-lg font-bold text-orange-800 mb-3">Особливості:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Ізольоване середовище</li>
                <li>✓ Власна файлова система</li>
                <li>✓ Власний процес PID 1</li>
                <li>✓ Можна створити багато контейнерів з одного образу</li>
                <li>✓ Легкий та швидкий</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Volumes (Томи)",
      subtitle: "Постійне зберігання даних",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Проблема контейнерів</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Контейнери за замовчуванням <strong>ephemeral</strong> (тимчасові) — коли контейнер видаляється, 
              всі дані в ньому теж втрачаються! 😱
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Рішення: Docker Volumes</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              <strong>Volume</strong> — це механізм для постійного зберігання даних незалежно від життєвого циклу контейнера
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <HardDrive className="w-10 h-10 text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-800">Без Volume</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-100 p-3 rounded border-l-4 border-red-500">
                    <p className="font-semibold">Контейнер видалено</p>
                    <p className="text-gray-600">❌ Дані втрачені назавжди</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <HardDrive className="w-10 h-10 text-green-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-800">З Volume</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                    <p className="font-semibold">Контейнер видалено</p>
                    <p className="text-gray-600">✅ Дані збережені на хості</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Приклади використання:</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300 text-center">
                <p className="font-bold text-purple-800 mb-2">База даних</p>
                <p className="text-sm text-gray-700">PostgreSQL, MySQL, MongoDB</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 text-center">
                <p className="font-bold text-green-800 mb-2">Файли користувачів</p>
                <p className="text-sm text-gray-700">Завантажені фото, документи</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300 text-center">
                <p className="font-bold text-orange-800 mb-2">Логи</p>
                <p className="text-sm text-gray-700">Application logs, metrics</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
            <p className="text-gray-700 font-mono text-sm">
              docker run -v mydata:/var/lib/mysql mysql
            </p>
            <p className="text-xs text-gray-500 mt-2">Volume "mydata" буде зберігати дані MySQL</p>
          </div>
        </div>
      )
    },
    {
      title: "Networks (Мережі)",
      subtitle: "Як контейнери спілкуються між собою",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-8 rounded-lg border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4">Docker Networks</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Docker автоматично створює віртуальні мережі для зв'язку між контейнерами. 
              Контейнери в одній мережі можуть спілкуватися за іменами!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="flex justify-center mb-4">
                <Network className="w-12 h-12 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-blue-800 text-center mb-3">Bridge</h4>
              <p className="text-sm text-gray-700 text-center mb-4">За замовчуванням для контейнерів на одному хості</p>
              <div className="bg-blue-50 p-3 rounded text-xs">
                <p className="font-semibold mb-1">Використання:</p>
                <p>Локальна розробка, мікросервіси на одній машині</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <div className="flex justify-center mb-4">
                <Server className="w-12 h-12 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-green-800 text-center mb-3">Host</h4>
              <p className="text-sm text-gray-700 text-center mb-4">Контейнер використовує мережу хоста напряму</p>
              <div className="bg-green-50 p-3 rounded text-xs">
                <p className="font-semibold mb-1">Використання:</p>
                <p>Висока продуктивність, немає ізоляції портів</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <div className="flex justify-center mb-4">
                <Box className="w-12 h-12 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-purple-800 text-center mb-3">None</h4>
              <p className="text-sm text-gray-700 text-center mb-4">Контейнер без мережевого доступу</p>
              <div className="bg-purple-50 p-3 rounded text-xs">
                <p className="font-semibold mb-1">Використання:</p>
                <p>Максимальна ізоляція, security testing</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Приклад: Web додаток + База даних</h4>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-500 p-6 rounded-lg w-40">
                  <p className="font-bold text-blue-800 mb-2">Web App</p>
                  <p className="text-sm text-gray-600">Node.js</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">web:3000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl text-green-600">⟷</div>
                <p className="text-sm font-semibold text-green-700 mt-2">my-network</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 border-2 border-green-500 p-6 rounded-lg w-40">
                  <p className="font-bold text-green-800 mb-2">Database</p>
                  <p className="text-sm text-gray-600">PostgreSQL</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">db:5432</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">Web може звертатися до бази за іменем: <code className="bg-gray-100 px-2 py-1 rounded">postgresql://db:5432</code></p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-900">
              <strong>💡 Порада:</strong> Використовуйте власні мережі замість bridge за замовчуванням для кращої ізоляції та DNS resolution
            </p>
          </div>
        </div>
      )
    },
    {
  title: "Docker Networks: Детальніше",
  subtitle: "Типи мереж та їх конфігурація",
  content: (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-300">
          <h4 className="font-bold text-blue-800 mb-3 text-center">Bridge (Default)</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">• Віртуальна мережа на хості</p>
            <p className="text-gray-700">• IP: 172.17.0.x</p>
            <p className="text-gray-700">• Потребує перенаправлення (mapping) портів</p>
          </div>
          <div className="mt-3 bg-white p-2 rounded text-xs font-mono">
            docker run --network bridge myapp
          </div>
        </div>

        <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
          <h4 className="font-bold text-green-800 mb-3 text-center">Host</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">• Спільна мережа з хостом</p>
            <p className="text-gray-700">• Немає ізоляції портів</p>
            <p className="text-gray-700">• Максимальна швидкість</p>
          </div>
          <div className="mt-3 bg-white p-2 rounded text-xs font-mono">
            docker run --network host myapp
          </div>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300">
          <h4 className="font-bold text-purple-800 mb-3 text-center">None</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">• Без мережі взагалі</p>
            <p className="text-gray-700">• Повна ізоляція</p>
            <p className="text-gray-700">• Тільки localhost</p>
          </div>
          <div className="mt-3 bg-white p-2 rounded text-xs font-mono">
            docker run --network none myapp
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
        <h4 className="font-bold text-orange-800 mb-4 text-lg">Custom Bridge Network (Рекомендовано!)</h4>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm text-gray-700 font-semibold">Переваги:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✅ Автоматичний DNS за іменами</li>
              <li>✅ Краща ізоляція</li>
              <li>✅ Динамічне підключення</li>
              <li>✅ Власна конфігурація підмережі</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg space-y-2">
            <p className="text-xs font-semibold text-gray-600 mb-2">Створення та використання:</p>
            <div className="space-y-1 text-xs font-mono bg-gray-50 p-2 rounded">
              <p className="text-green-600"># Створити мережу</p>
              <p>docker network create my-net</p>
              <p className="text-green-600 mt-2"># Запустити контейнер</p>
              <p>docker run --network my-net web</p>
              <p className="text-green-600 mt-2"># Підключити існуючий</p>
              <p>docker network connect my-net db</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
        <h4 className="font-bold text-gray-800 mb-4 text-center text-lg">Конфігурація Custom Network</h4>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs space-y-2">
          <p className="text-green-600"># Базова мережа</p>
          <p>docker network create my-network</p>
          
          <p className="text-green-600 mt-3"># З власною підмережею</p>
          <p>docker network create --subnet=192.168.10.0/24 my-network</p>
          
          <p className="text-green-600 mt-3"># З gateway</p>
          <p>docker network create --subnet=192.168.10.0/24 \</p>
          <p className="ml-4">--gateway=192.168.10.1 my-network</p>
          
          <p className="text-green-600 mt-3"># З IP діапазоном</p>
          <p>docker network create --subnet=192.168.10.0/24 \</p>
          <p className="ml-4">--ip-range=192.168.10.128/25 my-network</p>
          
          <p className="text-green-600 mt-3"># З драйвером</p>
          <p>docker network create --driver bridge my-network</p>
        </div>
      </div>

      <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
        <h4 className="font-bold text-indigo-800 mb-3">Приклад: Статичний IP</h4>
        <div className="bg-white p-3 rounded font-mono text-xs space-y-1">
          <p>docker network create --subnet=172.20.0.0/16 mynet</p>
          <p className="mt-2">docker run --network mynet --ip 172.20.0.5 nginx</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500 text-sm">
          <p className="font-bold text-blue-800">Перенаправлення портів</p>
          <p className="font-mono text-xs mt-2">-p 8080:80</p>
          <p className="text-xs text-gray-600">хост:контейнер</p>
        </div>
        <div className="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm">
          <p className="font-bold text-green-800">Всі порти</p>
          <p className="font-mono text-xs mt-2">-P</p>
          <p className="text-xs text-gray-600">автомат. перенаправлення</p>
        </div>
        <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500 text-sm">
          <p className="font-bold text-purple-800">Hostname</p>
          <p className="font-mono text-xs mt-2">--hostname myapp</p>
          <p className="text-xs text-gray-600">DNS ім'я</p>
        </div>
      </div>
      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mt-4">
  <h4 className="font-bold text-yellow-800 mb-3 text-lg">⚠️ Важливо знати:</h4>
  <div className="space-y-2 text-sm text-gray-800">
    <p>✅ <strong>DNS працює тільки в custom bridge</strong> мережах, не в дефолтній bridge</p>
    <p>✅ Контейнери в <strong>різних мережах не бачать один одного</strong> (ізоляція)</p>
    <p>✅ Один контейнер може бути в <strong>кількох мережах одночасно</strong></p>
    <p>✅ Docker автоматично керує <strong>iptables</strong> для перенаправлення портів</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
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
            Слайд {currentSlide + 1} з {slides.length} | Частина 2: Основні концепції
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;