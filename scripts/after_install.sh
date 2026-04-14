#!/bin/bash
set -e

chown -R www-data:www-data /var/www/turftechhq
find /var/www/turftechhq -type d -exec chmod 755 {} \;
find /var/www/turftechhq -type f -exec chmod 644 {} \;

nginx -t && systemctl reload nginx
