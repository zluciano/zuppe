#!/bin/bash
docker-compose -f docker/compose/test.yml run zuppe unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
