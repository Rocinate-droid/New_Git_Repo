FROM ubuntu:22.04

# Avoid interactive prompts during install
ENV DEBIAN_FRONTEND=noninteractive

# Install nginx and clean up
RUN apt update && \
    apt install -y nginx && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

# Copy static site content
COPY index.html /var/www/html/

# Expose port
EXPOSE 80

# Healthcheck (optional but recommended for Swarm)
HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl -f http://localhost || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
