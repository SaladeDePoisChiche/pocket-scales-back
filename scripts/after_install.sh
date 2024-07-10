#!/bin/bash
date -u >> /home/ec2-user/pocket-scales-back/deploy.log
echo 'run after_install.sh: ' >> /home/ec2-user/pocket-scales-back/deploy.log

echo 'cd /home/ec2-user/pocket-scales-back' >> /home/ec2-user/pocket-scales-back/deploy.log
cd /home/ec2-user/pocket-scales-back >> /home/ec2-user/pocket-scales-back/deploy.log

echo 'npm install' >> /home/ec2-user/pocket-scales-back/deploy.log 
npm install >> /home/ec2-user/pocket-scales-back/deploy.log

echo 'npm run build' >> /home/ec2-user/pocket-scales-back/deploy.log 
npm run build >> /home/ec2-user/pocket-scales-back/deploy.log 