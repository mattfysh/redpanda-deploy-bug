# helm repo add redpanda https://charts.redpanda.com

helm upgrade --install redpanda redpanda/redpanda --version 5.9.7 -f values.yaml
