#!/bin/bash
# always run this from the root directory of the project!

PKG_OK=$(dpkg-query -W --showformat='${Status}\n' php|grep "install ok installed")
echo Checking for php: $PKG_OK
if [ "" == "$PKG_OK" ]; then
  echo "No php. Setting up php."
  sudo apt-get --force-yes --yes install php
fi

# change localhost to other local ip if needed
php -S localhost:80 -t .