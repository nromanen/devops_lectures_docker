import React, { useState } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import Part6 from './Part6'
import Part7 from './Part7'
import Part8 from './Part8'
import Part9 from './Part9'

function App() {
  const [currentPart, setCurrentPart] = useState(1);

  return (
    <div>
      <div className="bg-gray-800 p-4 flex justify-center gap-4">
        <button
          onClick={() => setCurrentPart(1)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 1: Вступ
        </button>
        <button
          onClick={() => setCurrentPart(2)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 2: Концепції
        </button>

        <button
          onClick={() => setCurrentPart(3)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 3: Docker Hub
        </button>

        <button
          onClick={() => setCurrentPart(4)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 4: Практична робота з Docker
        </button>

        <button
          onClick={() => setCurrentPart(5)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 5: Dockerfile
        </button>

        <button
          onClick={() => setCurrentPart(6)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 6: Multi-stage builds 
        </button>

        <button
          onClick={() => setCurrentPart(7)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 7: Docker Compose 
        </button>

        <button
          onClick={() => setCurrentPart(8)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 8: Практичні сценарії
        </button>

        <button
          onClick={() => setCurrentPart(9)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Частина 9: Підсумок
        </button>
      </div>

      {currentPart === 1 && <Part1 />}
      {currentPart === 2 && <Part2 />}
      {currentPart === 3 && <Part3 />}
      {currentPart === 4 && <Part4 />}
      {currentPart === 5 && <Part5 />}
      {currentPart === 6 && <Part6 />}
      {currentPart === 7 && <Part7 />}
      {currentPart === 8 && <Part8 />}
      {currentPart === 9 && <Part9 />}
    </div>
  );
}

export default App;

