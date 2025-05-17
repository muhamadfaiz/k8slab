# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
