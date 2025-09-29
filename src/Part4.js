import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Terminal, PlayCircle, StopCircle, Trash2, FileText, AlertCircle, Settings } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Встановлення Docker",
      subtitle: "Почнемо з основ",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <div className="flex items-center justify-center mb-6">
              <Download className="w-24 h-24 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">Встановлення Docker</h3>
            <p className="text-lg text-gray-800 text-center">
              Docker Desktop — найпростіший спосіб почати роботу з Docker
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <div className="text-center mb-4">
                <span className="text-5xl">🪟</span>
              </div>
              <h4 className="text-xl font-bold text-blue-800 text-center mb-3">Windows</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>1. Завантажити Docker Desktop</p>
                <p>2. Запустити інсталятор</p>
                <p>3. Увімкнути WSL 2</p>
                <p>4. Перезавантажити систему</p>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded text-center">
                <p className="text-xs font-semibold text-blue-800">Windows 10/11 Pro</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gray-500">
              <div className="text-center mb-4">
                <span className="text-5xl">🍎</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 text-center mb-3">macOS</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>1. Завантажити Docker Desktop</p>
                <p>2. Перетягнути в Applications</p>
                <p>3. Запустити Docker.app</p>
                <p>4. Дозволити permissions</p>
              </div>
              <div className="mt-4 bg-gray-100 p-3 rounded text-center">
                <p className="text-xs font-semibold text-gray-800">macOS 11+</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
              <div className="text-center mb-4">
                <span className="text-5xl">🐧</span>
              </div>
              <h4 className="text-xl font-bold text-orange-800 text-center mb-3">Linux</h4>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs mt-3">
                <p># Ubuntu/Debian</p>
                <p>sudo apt install docker.io</p>
                <p className="mt-2"># Fedora</p>
                <p>sudo dnf install docker</p>
              </div>
              <div className="mt-4 bg-orange-50 p-3 rounded text-center">
                <p className="text-xs font-semibold text-orange-800">Різні дистрибутиви</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h4 className="text-lg font-bold text-green-800 mb-4">✅ Перевірка встановлення</h4>
            <div className="bg-gray-900 text-white p-4 rounded-lg font-mono space-y-2">
              <p className="text-green-400"># Перевірити версію Docker</p>
              <p>docker --version</p>
              <p className="text-gray-400 text-sm">Docker version 24.0.7, build afdd53b</p>

              <p className="text-green-400 mt-4"># Перевірити роботу</p>
              <p>docker run hello-world</p>
              <p className="text-gray-400 text-sm">Hello from Docker! ...</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Docker Desktop включає Docker Engine, Docker CLI, Docker Compose та Kubernetes
            </p>
          </div>
        </div>
      )
    },
    {
      title: "docker run - Запуск контейнерів",
      subtitle: "Найважливіша команда Docker",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <PlayCircle className="w-16 h-16" />
            </div>
            <h3 className="text-3xl font-bold text-center">docker run</h3>
            <p className="text-center text-green-100 text-lg mt-2">Створює та запускає контейнер з образу</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Базовий синтаксис</h4>
            <div className="bg-gray-900 text-white p-6 rounded-lg font-mono">
              <p className="text-green-400 mb-2"># Базова команда</p>
              <p className="text-xl mb-4">docker run [OPTIONS] IMAGE [COMMAND]</p>

              <p className="text-green-400 mb-2 mt-6"># Найпростіший приклад</p>
              <p>docker run nginx</p>

              <p className="text-green-400 mb-2 mt-4"># З іменем контейнера</p>
              <p>docker run --name my-nginx nginx</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Основні опції</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">-d, --detach</p>
                <p className="text-sm text-gray-700 mb-2">Запуск у фоновому режимі</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run -d nginx
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">--name</p>
                <p className="text-sm text-gray-700 mb-2">Присвоїти ім'я контейнеру</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run --name web nginx
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">-p, --publish</p>
                <p className="text-sm text-gray-700 mb-2">Перенаправлення портів</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run -p 8080:80 nginx
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">-v, --volume</p>
                <p className="text-sm text-gray-700 mb-2">Підключити volume</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run -v mydata:/data nginx
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">-e, --env</p>
                <p className="text-sm text-gray-700 mb-2">Змінні оточення</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run -e DB_HOST=localhost app
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">--rm</p>
                <p className="text-sm text-gray-700 mb-2">Видалити після зупинки</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run --rm nginx
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">-it</p>
                <p className="text-sm text-gray-700 mb-2">Інтерактивний режим + TTY</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run -it ubuntu bash
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-mono text-blue-600 font-bold mb-2">--network</p>
                <p className="text-sm text-gray-700 mb-2">Підключити до мережі</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs">
                  docker run --network my-net nginx
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-lg font-bold text-purple-800 mb-4">Комплексний приклад</h4>
            <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm">
              <p className="text-green-400"># Запустити веб-сервер з усіма опціями</p>
              <p>docker run -d \</p>
              <p className="ml-4">--name my-web-server \</p>
              <p className="ml-4">-p 8080:80 \</p>
              <p className="ml-4">-v ./html:/usr/share/nginx/html \</p>
              <p className="ml-4">-e NGINX_HOST=example.com \</p>
              <p className="ml-4">--restart unless-stopped \</p>
              <p className="ml-4">nginx:alpine</p>
            </div>
            <p className="text-sm text-gray-600 mt-3">Запускає nginx у фоні, на порту 8080, з volume для HTML та автоперезапуском</p>
          </div>
        </div>
      )
    },
    {
      title: "Керування контейнерами",
      subtitle: "ps, stop, start, restart, rm",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Основні команди керування</h3>
            <p className="text-gray-700">Команди для перегляду, зупинки, запуску та видалення контейнерів</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Terminal className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-xl font-bold text-green-800">docker ps</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Список запущених контейнерів</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Активні контейнери</p>
                <p>docker ps</p>

                <p className="text-gray-400 mt-3"># Всі контейнери</p>
                <p>docker ps -a</p>

                <p className="text-gray-400 mt-3"># Тільки ID</p>
                <p>docker ps -q</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <StopCircle className="w-8 h-8 text-red-600 mr-3" />
                <h4 className="text-xl font-bold text-red-800">docker stop</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Зупинити контейнер</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Зупинити один</p>
                <p>docker stop my-container</p>

                <p className="text-gray-400 mt-3"># Зупинити всі</p>
                <p>docker stop $(docker ps -q)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <Trash2 className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-xl font-bold text-purple-800">docker rm</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Видалити контейнер</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Видалити зупинений</p>
                <p>docker rm my-container</p>

                <p className="text-gray-400 mt-3"># Примусово</p>
                <p>docker rm -f my-container</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-orange-600 mr-3" />
                <h4 className="text-xl font-bold text-orange-800">docker restart</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Перезапустити контейнер</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Перезапустити</p>
                <p>docker restart my-container</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Перегляд логів та інформації",
      subtitle: "logs, inspect, stats",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <div className="flex items-center mb-4">
              <FileText className="w-12 h-12 text-purple-600 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-purple-800">Діагностика контейнерів</h3>
                <p className="text-gray-700">Команди для моніторингу та debugging</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-800 mb-4">docker logs</h4>
              <p className="text-sm text-gray-700 mb-3">Перегляд логів контейнера</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Всі логи</p>
                <p>docker logs my-container</p>

                <p className="text-gray-400 mt-3"># Останні 100 рядків</p>
                <p>docker logs --tail 100 my-container</p>

                <p className="text-gray-400 mt-3"># Слідкувати (live)</p>
                <p>docker logs -f my-container</p>

                <p className="text-gray-400 mt-3"># З timestamp</p>
                <p>docker logs -t my-container</p>

                <p className="text-gray-400 mt-3"># За період</p>
                <p>docker logs --since 1h my-container</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-bold text-green-800 mb-4">docker inspect</h4>
              <p className="text-sm text-gray-700 mb-3">Детальна інформація про контейнер</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Вся інформація (JSON)</p>
                <p>docker inspect my-container</p>

                <p className="text-gray-400 mt-3"># IP адреса</p>
                <p>docker inspect my-container | grep IPAddress</p>

                <p className="text-gray-400 mt-3"># Volumes</p>
                <p>docker inspect my-container | grep Mounts</p>

                <p className="text-gray-400 mt-3"># Environment</p>
                <p>docker inspect my-container | grep Env</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h4 className="text-xl font-bold text-orange-800 mb-4">docker stats</h4>
              <p className="text-sm text-gray-700 mb-3">Статистика використання ресурсів</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Всі контейнери (live)</p>
                <p>docker stats</p>

                <p className="text-gray-400 mt-3"># Конкретний контейнер</p>
                <p>docker stats my-container</p>

                <p className="text-gray-400 mt-3"># Без stream</p>
                <p>docker stats --no-stream</p>
              </div>
              <div className="bg-orange-50 p-3 rounded mt-3 text-xs">
                <p className="text-orange-800"><strong>Показує:</strong> CPU, Memory, Network I/O, Block I/O</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-4">docker top</h4>
              <p className="text-sm text-gray-700 mb-3">Процеси всередині контейнера</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                <p className="text-gray-400"># Список процесів</p>
                <p>docker top my-container</p>

                <p className="text-gray-400 mt-3"># З параметрами</p>
                <p>docker top my-container aux</p>
              </div>
              <div className="bg-purple-50 p-3 rounded mt-3 text-xs">
                <p className="text-purple-800">Аналогічно команді ps в Linux</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Практичний приклад: Debugging</h4>
            <div className="bg-black bg-opacity-30 p-4 rounded-lg font-mono text-sm space-y-2">
              <p className="text-yellow-300"># 1. Перевірити чи працює</p>
              <p>docker ps</p>

              <p className="text-yellow-300 mt-3"># 2. Подивитись логи</p>
              <p>docker logs -f my-app</p>

              <p className="text-yellow-300 mt-3"># 3. Перевірити ресурси</p>
              <p>docker stats my-app</p>

              <p className="text-yellow-300 mt-3"># 4. Детальна інформація</p>
              <p>docker inspect my-app</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Команда <code className="bg-gray-200 px-2 py-1 rounded">docker logs -f</code> найкорисніша для debugging у реальному часі!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Інтерактивний режим",
      subtitle: "exec, attach - робота всередині контейнера",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 text-center mb-2">Інтерактивна робота</h3>
            <p className="text-center text-gray-700">Виконання команд всередині запущеного контейнера</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h4 className="text-2xl font-bold text-blue-800 mb-4">docker exec</h4>
              <p className="text-gray-700 mb-4">Виконати команду в запущеному контейнері</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Базовий синтаксис:</p>
                  <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                    docker exec [OPTIONS] CONTAINER COMMAND
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                    <p className="text-gray-400"># Відкрити bash</p>
                    <p>docker exec -it my-container bash</p>

                    <p className="text-gray-400 mt-3"># Виконати команду</p>
                    <p>docker exec my-container ls -la</p>

                    <p className="text-gray-400 mt-3"># Як root</p>
                    <p>docker exec -u root -it my-container bash</p>

                    <p className="text-gray-400 mt-3"># У конкретній папці</p>
                    <p>docker exec -w /app my-container npm test</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <h4 className="text-2xl font-bold text-purple-800 mb-4">docker attach</h4>
              <p className="text-gray-700 mb-4">Підключитися до основного процесу контейнера</p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Базовий синтаксис:</p>
                  <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                    docker attach [OPTIONS] CONTAINER
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Приклади:</p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                    <p className="text-gray-400"># Підключитися</p>
                    <p>docker attach my-container</p>

                    <p className="text-gray-400 mt-3"># Вийти: Ctrl+P, Ctrl+Q</p>
                    <p>docker attach --sig-proxy=false my-con</p>
                  </div>
                </div>

                <div className="bg-red-50 p-3 rounded border-l-4 border-red-500 mt-4">
                  <p className="text-sm text-red-800">
                    <strong>⚠️ Увага:</strong> При виході (Ctrl+C) контейнер зупиниться!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Опції -i та -t</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-mono text-blue-600 font-bold text-lg mb-2">-i (--interactive)</p>
                <p className="text-sm text-gray-700">Зберігає STDIN відкритим</p>
                <p className="text-xs text-gray-600 mt-2">Дозволяє вводити команди</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-mono text-blue-600 font-bold text-lg mb-2">-t (--tty)</p>
                <p className="text-sm text-gray-700">Виділяє pseudo-TTY</p>
                <p className="text-xs text-gray-600 mt-2">Робить термінал інтерактивним</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded mt-4 border-l-4 border-green-500">
              <p className="text-sm text-green-900">
                <strong>✅ Майже завжди використовуйте разом:</strong> <code className="bg-gray-200 px-2 py-1 rounded">-it</code>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">exec vs attach - Різниця</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-2">docker exec</p>
                  <p className="text-sm text-gray-700">• Запускає новий процес</p>
                  <p className="text-sm text-gray-700">• Вихід НЕ зупиняє контейнер ✅</p>
                  <p className="text-sm text-gray-700">• Для debugging</p>
                </div>
                <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-bold text-purple-800 mb-2">docker attach</p>
                  <p className="text-sm text-gray-700">• Підключається до головного</p>
                  <p className="text-sm text-gray-700">• Вихід зупиняє контейнер ⚠️</p>
                  <p className="text-sm text-gray-700">• Рідко потрібен</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Практичні приклади</h4>
            <div className="bg-black bg-opacity-30 p-4 rounded-lg font-mono text-sm space-y-3">
              <div>
                <p className="text-yellow-300"># Відкрити bash в Ubuntu</p>
                <p>docker exec -it my-ubuntu bash</p>
              </div>

              <div>
                <p className="text-yellow-300"># Міграції БД</p>
                <p>docker exec my-app npm run migrate</p>
              </div>

              <div>
                <p className="text-yellow-300"># Підключитися до MySQL</p>
                <p>docker exec -it my-mysql mysql -u root -p</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Робота з портами",
      subtitle: "Перенаправлення та мапінг портів",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-300">
            <h3 className="text-2xl font-bold text-orange-800 text-center mb-4">Перенаправлення портів</h3>
            <p className="text-center text-gray-700 text-lg">
              Як зробити сервіси в контейнері доступними ззовні
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Синтаксис -p / --publish</h4>
            <div className="bg-gray-900 text-white p-6 rounded-lg font-mono space-y-4">
              <div>
                <p className="text-green-400 mb-2"># Базовий формат</p>
                <p className="text-xl">docker run -p HOST_PORT:CONTAINER_PORT image</p>
              </div>

              <div className="mt-6">
                <p className="text-green-400 mb-2"># Приклад</p>
                <p className="text-lg">docker run -p 8080:80 nginx</p>
                <p className="text-sm text-gray-400 mt-2">localhost:8080 → nginx:80</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h4 className="text-lg font-bold text-blue-800 mb-4">Варіанти мапінгу</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-blue-600 mb-1">-p 8080:80</p>
                  <p className="text-xs text-gray-600">Порт 8080 хоста → порт 80 контейнера</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-blue-600 mb-1">-p 80:80</p>
                  <p className="text-xs text-gray-600">Однаковий порт</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-blue-600 mb-1">-p 127.0.0.1:8080:80</p>
                  <p className="text-xs text-gray-600">Тільки для localhost</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-blue-600 mb-1">-p 3000-3005:3000-3005</p>
                  <p className="text-xs text-gray-600">Діапазон портів</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-mono text-blue-600 mb-1">-P</p>
                  <p className="text-xs text-gray-600">Автоматично всі EXPOSE порти</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h4 className="text-lg font-bold text-green-800 mb-4">Приклади сервісів</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-gray-700 mb-2">🌐 Веб-сервер</p>
                  <p className="font-mono text-xs bg-gray-900 text-green-400 p-2 rounded">
                    docker run -p 80:80 nginx
                  </p>
                  <p className="text-xs text-gray-600 mt-1">http://localhost</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-gray-700 mb-2">🗄️ База даних</p>
                  <p className="font-mono text-xs bg-gray-900 text-green-400 p-2 rounded">
                    docker run -p 5432:5432 postgres
                  </p>
                  <p className="text-xs text-gray-600 mt-1">localhost:5432</p>
                </div>

                <div className="bg-white p-3 rounded shadow">
                  <p className="font-semibold text-gray-700 mb-2">🟢 Node.js додаток</p>
                  <p className="font-mono text-xs bg-gray-900 text-green-400 p-2 rounded">
                    docker run -p 3000:3000 myapp
                  </p>
                  <p className="text-xs text-gray-600 mt-1">http://localhost:3000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Кілька портів одночасно</h4>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
              <p className="text-gray-400"># Веб-сервер + API</p>
              <p>docker run -p 80:80 -p 443:443 -p 3000:3000 myapp</p>

              <p className="text-gray-400 mt-4"># Або через окремі рядки</p>
              <p>docker run \</p>
              <p className="ml-4">-p 80:80 \</p>
              <p className="ml-4">-p 443:443 \</p>
              <p className="ml-4">-p 3000:3000 \</p>
              <p className="ml-4">myapp</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Перевірка портів</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Команди для перевірки:</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                  <p className="text-gray-400"># Які порти відкриті</p>
                  <p>docker port my-container</p>

                  <p className="text-gray-400 mt-3"># Через inspect</p>
                  <p>docker inspect my-container</p>

                  <p className="text-gray-400 mt-3"># У браузері</p>
                  <p className="text-white">http://localhost:8080</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Output docker port:</p>
                <div className="bg-gray-100 p-3 rounded font-mono text-xs">
                  <p>80/tcp -&gt; 0.0.0.0:8080</p>
                  <p>80/tcp -&gt; :::8080</p>
                  <p>443/tcp -&gt; 0.0.0.0:8443</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  0.0.0.0 = доступний з будь-якого інтерфейсу
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-3">⚠️ Типові помилки</h4>
            <div className="space-y-2 text-sm text-gray-800">
              <p>• <strong>Порт вже зайнятий:</strong> інший процес використовує порт</p>
              <p>• <strong>Firewall блокує:</strong> перевірте налаштування фаєрволу</p>
              <p>• <strong>Неправильний порядок:</strong> завжди HOST:CONTAINER!</p>
              <p>• <strong>Контейнер не слухає:</strong> додаток не запущений всередині</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-sm text-gray-800">
              <strong>💡 Порада:</strong> Використовуйте нестандартні порти (8080, 3000) для уникнення конфліктів!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Робота з Volumes",
      subtitle: "Постійне зберігання даних на практиці",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-8 rounded-lg border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-800 text-center mb-4">Docker Volumes на практиці</h3>
            <p className="text-center text-gray-700 text-lg">
              Три способи збереження даних
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h4 className="text-lg font-bold text-blue-800 mb-3 text-center">Named Volumes</h4>
              <p className="text-sm text-gray-700 mb-3 text-center">Керуються Docker</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <p>docker run -v mydata:/data app</p>
              </div>
              <div className="mt-3 bg-blue-50 p-3 rounded text-xs">
                <p className="text-blue-800"><strong>✅ Рекомендовано</strong></p>
                <p className="text-gray-600 mt-1">Docker керує розташуванням</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-green-500">
              <h4 className="text-lg font-bold text-green-800 mb-3 text-center">Bind Mounts</h4>
              <p className="text-sm text-gray-700 mb-3 text-center">Папка з хоста</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <p>docker run -v /host:/data app</p>
              </div>
              <div className="mt-3 bg-green-50 p-3 rounded text-xs">
                <p className="text-green-800"><strong>Для розробки</strong></p>
                <p className="text-gray-600 mt-1">Синхронізація коду</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h4 className="text-lg font-bold text-orange-800 mb-3 text-center">tmpfs Mounts</h4>
              <p className="text-sm text-gray-700 mb-3 text-center">В пам'яті (RAM)</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                <p>docker run --tmpfs /data app</p>
              </div>
              <div className="mt-3 bg-orange-50 p-3 rounded text-xs">
                <p className="text-orange-800"><strong>Тимчасові дані</strong></p>
                <p className="text-gray-600 mt-1">Швидко, але втрачається</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Команди для роботи з volumes</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800 mb-3">Створення та управління</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                  <p className="text-gray-400"># Створити volume</p>
                  <p>docker volume create mydata</p>

                  <p className="text-gray-400 mt-3"># Список volumes</p>
                  <p>docker volume ls</p>

                  <p className="text-gray-400 mt-3"># Інформація</p>
                  <p>docker volume inspect mydata</p>

                  <p className="text-gray-400 mt-3"># Видалити volume</p>
                  <p>docker volume rm mydata</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold text-gray-800 mb-3">Використання у run</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs space-y-2">
                  <p className="text-gray-400"># Named volume</p>
                  <p>docker run -v mydata:/app/data app</p>

                  <p className="text-gray-400 mt-3"># Bind mount</p>
                  <p>docker run -v $(pwd):/app app</p>

                  <p className="text-gray-400 mt-3"># Read-only</p>
                  <p>docker run -v mydata:/data:ro app</p>

                  <p className="text-gray-400 mt-3"># Кілька volumes</p>
                  <p>docker run -v db:/var/lib/mysql \</p>
                  <p className="ml-4">-v logs:/var/log mysql</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-800 mb-4">Практичні приклади</h4>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800 mb-2">📊 База даних PostgreSQL</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                  <p>docker run -d --name postgres-db \</p>
                  <p className="ml-4">-v pgdata:/var/lib/postgresql/data \</p>
                  <p className="ml-4">-e POSTGRES_PASSWORD=secret \</p>
                  <p className="ml-4">postgres:15</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">Дані БД збережуться у volume</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800 mb-2">🖥️ Розробка Node.js додатку</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                  <p>docker run -d --name dev-app \</p>
                  <p className="ml-4">-v $(pwd):/app \</p>
                  <p className="ml-4">-v /app/node_modules \</p>
                  <p className="ml-4">-p 3000:3000 node:18</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">Код синхронізується, node_modules в контейнері</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800 mb-2">📝 Nginx з конфігурацією</p>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                  <p>docker run -d \</p>
                  <p className="ml-4">-v ./html:/usr/share/nginx/html:ro \</p>
                  <p className="ml-4">-v ./nginx.conf:/etc/nginx/nginx.conf:ro \</p>
                  <p className="ml-4">-p 80:80 nginx</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">HTML та конфіг тільки для читання</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-800 mb-4">Копіювання даних</h4>
            <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm space-y-2">
              <p className="text-gray-400"># З контейнера на хост</p>
              <p>docker cp my-container:/app/logs ./logs</p>

              <p className="text-gray-400 mt-3"># З хоста в контейнер</p>
              <p>docker cp ./config.json my-container:/app/</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-800 mb-3">💡 Best Practices</h4>
            <div className="space-y-2 text-sm text-gray-800">
              <p>• Використовуйте <strong>named volumes</strong> для production</p>
              <p>• Використовуйте <strong>bind mounts</strong> тільки для розробки</p>
              <p>• Додавайте <strong>:ro</strong> для read-only, де можливо</p>
              <p>• Видаляйте непотрібні: <code className="bg-gray-200 px-2 py-1 rounded">docker volume prune</code></p>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{slides[currentSlide].title}</h1>
            <p className="text-xl text-blue-100">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="p-12 min-h-[500px]">
            {slides[currentSlide].content}
          </div>

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
                  className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
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

          <div className="bg-gray-100 px-8 py-3 text-center text-gray-600">
            Слайд {currentSlide + 1} з {slides.length} | Частина 4: Практична робота
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;