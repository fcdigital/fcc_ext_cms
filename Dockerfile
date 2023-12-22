# выбираем базовый образ
FROM node:18.17.0

# создаем и переходим в рабочую директорию
WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm install -g npm@latest && npm install --legacy-peer-deps

# копируем весь проект
COPY . .

# определяем порт, на котором будет работать приложение
EXPOSE 1337

# запускаем приложение
CMD ["npm", "run", "develop"]