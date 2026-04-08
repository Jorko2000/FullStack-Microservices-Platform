# Kibana Setup

Kibana is used for log visualization.

## Usage
1. Start Elasticsearch + Kibana
2. Open http://localhost:5601
3. Create index pattern: logs-*
4. View logs from services

## Logs Source
Logs should be shipped via Filebeat or Docker logging driver.
