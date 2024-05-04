#!/bin/bash
# TUNNELMOLE_DEBUG=1 node dist/bin/tunnelmole.js 8123 as test.lan.keazilla.net

#TUNNELMOLE_DEBUG=1
until node dist/bin/tunnelmole.js 8123 as house.lan.keazilla.net
do
    echo "Restarting"
    sleep 2
done
