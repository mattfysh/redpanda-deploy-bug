import * as k8s from '@pulumi/kubernetes'

const disabled = {
  enabled: false,
  external: {
    default: {
      enabled: false,
    }
  }
}

new k8s.helm.v3.Release(
  'redpanda',
  {
    repositoryOpts: {
      repo: 'https://charts.redpanda.com',
    },
    chart: 'redpanda',
    version: '5.9.7',
    values: {
      statefulset: {
        replicas: 1,
      },
      tls: {
        enabled: false,
      },
      listeners: {
        kafka: {
          external: {
            default: {
              advertisedPorts: [31094]
            }
          }
        },
        admin: disabled,
        schemaRegistry: disabled,
        http: disabled,
      },
    },
  },
)
