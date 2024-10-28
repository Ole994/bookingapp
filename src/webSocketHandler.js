// src/webSocketHandler.js

let socket;

export const initWebSocket = () => {
  const wsUrl = "ws://localhost:8080";
  socket = new WebSocket(wsUrl);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      if (socket) socket.close();
    } else if (document.visibilityState === "visible") {
      socket = new WebSocket(wsUrl);
      setupSocketHandlers();
    }
  });

  setupSocketHandlers();
};

const setupSocketHandlers = () => {
  socket.onopen = () => {
    console.log("WebSocket tilkoblet");
  };

  socket.onclose = () => {
    console.log("WebSocket koblet fra. Prøver å koble til på nytt...");
    setTimeout(() => {
      socket = new WebSocket("ws://localhost:8080");
      setupSocketHandlers();
    }, 1000);
  };

  socket.onerror = (error) => {
    console.error("WebSocket feil:", error);
  };
};
