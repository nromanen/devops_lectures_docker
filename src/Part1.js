import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Package, Server, Clock, Rocket } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Docker",
      subtitle: "Контейнеризація для сучасної розробки",
      icon: <Package className="w-32 h-32 text-blue-500" />,
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img 
  src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" 
  alt="Docker Logo" 
  className="w-40 h-40 mx-auto"
/>
          </div>
          <p className="text-2xl text-gray-600">Трохи теорії</p>
        </div>
      )
    },
    {
      title: "Проблема: 'У мене працює...'",
      subtitle: "Знайома ситуація?",
      content: (
        <div className="space-y-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-xl font-semibold text-red-700 mb-3">👨‍💻 Розробник:</p>
            <p className="text-lg text-gray-700">"У мене все працює на локальній машині!"</p>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-xl font-semibold text-yellow-700 mb-3">🧪 Тестувальник:</p>
            <p className="text-lg text-gray-700">"У мене не запускається... Помилка залежностей!"</p>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
            <p className="text-xl font-semibold text-orange-700 mb-3">🚀 DevOps:</p>
            <p className="text-lg text-gray-700">"На production сервері зовсім інше оточення..."</p>
          </div>

          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-gray-800">😤 Як це вирішити?</p>
          </div>
        </div>
      )
    },
    {
      title: "Що таке Docker?",
      subtitle: "Платформа для контейнеризації додатків",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
            <p className="text-2xl text-gray-800 leading-relaxed">
              <strong className="text-blue-600">Docker</strong> — це платформа для розробки, доставки та запуску додатків у <strong>контейнерах</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <p className="text-xl font-semibold text-green-700 mb-3">✅ Що дає Docker?</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Однакове оточення скрізь</li>
                <li>• Швидке розгортання</li>
                <li>• Ізоляція додатків</li>
                <li>• Легке масштабування</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-blue-700 mb-3">📦 Контейнер</p>
              <p className="text-gray-700">
                Легкий, портативний пакет, який містить все необхідне для запуску додатку: код, бібліотеки, залежності, конфігурацію
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Чому Docker?",
      subtitle: "Переваги контейнеризації",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Rocket className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">Швидкість</h3>
              </div>
              <p className="text-gray-700">Контейнери запускаються за секунди, на відміну від віртуальних машин</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">Портативність</h3>
              </div>
              <p className="text-gray-700">"Зібрав один раз — запускай скрізь": на локальному ПК, сервері, хмарі</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-purple-800">Ефективність</h3>
              </div>
              <p className="text-gray-700">Легші за VM, споживають менше ресурсів, більше контейнерів на одному хості</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-bold text-orange-800">Консистентність</h3>
              </div>
              <p className="text-gray-700">Однакове оточення від розробки до production — немає сюрпризів</p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-300 mt-6">
            <p className="text-lg text-center text-indigo-900">
              <strong>Результат:</strong> Швидша розробка, надійніше розгортання, простіше масштабування!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Історія Docker",
      subtitle: "Від ідеї до індустрійного стандарту",
      content: (
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-300"></div>
            
            <div className="relative mb-8 ml-16">
              <div className="absolute -left-10 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-xl font-bold text-blue-600 mb-2">2013 рік</p>
                <p className="text-gray-700">Соломон Хайкс (Solomon Hykes) представив Docker на конференції PyCon</p>
                <p className="text-sm text-gray-500 mt-2">Початково — внутрішній проект компанії dotCloud</p>
              </div>
            </div>

            <div className="relative mb-8 ml-16">
              <div className="absolute -left-10 top-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-xl font-bold text-green-600 mb-2">2014-2015</p>
                <p className="text-gray-700">Швидке зростання популярності, підтримка великих компаній</p>
                <p className="text-sm text-gray-500 mt-2">Microsoft, Google, Amazon почали інтеграцію</p>
              </div>
            </div>

            <div className="relative mb-8 ml-16">
              <div className="absolute -left-10 top-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-xl font-bold text-purple-600 mb-2">2017</p>
                <p className="text-gray-700">Docker Swarm та Kubernetes для оркестрації</p>
                <p className="text-sm text-gray-500 mt-2">Масштабування контейнерів у production</p>
              </div>
            </div>

            <div className="relative ml-16">
              <div className="absolute -left-10 top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-xl font-bold text-orange-600 mb-2">Сьогодні</p>
                <p className="text-gray-700">Індустрійний стандарт контейнеризації</p>
                <p className="text-sm text-gray-500 mt-2">Мільйони розробників по всьому світу</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="text-lg text-blue-900">
              <strong>Факт:</strong> Docker змінив підхід до розробки та доставки програмного забезпечення
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
            Слайд {currentSlide + 1} з {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;