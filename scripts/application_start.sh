#!/bin/bash
date -u >> /home/ec2-user/pocket-scales-back/deploy.log

echo 'current launch location:' >> /home/ec2-user/pocket-scales-back/deploy.log
pwd >> /home/ec2-user/pocket-scales-back/deploy.log

echo 'run application_start.sh: ' >> /home/ec2-user/pocket-scales-back/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'sudo pm2 restart nodejs-app' >> /home/ec2-user/pocket-scales-back/deploy.log
sudo pm2 restart ./dist/main.js >> /home/ec2-user/pocket-scales-back/deploy.log
