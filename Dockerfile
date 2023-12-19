# выбираем базовый образ
FROM node:18.0.0

# создаем и переходим в рабочую директорию
WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm install

# копируем весь проект
COPY . .

# собираем проект
RUN npm run build

# определяем порт, на котором будет работать приложение
EXPOSE 1337

# запускаем приложение
CMD ["npm", "start"]