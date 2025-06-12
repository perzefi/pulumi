import { Network } from "./infrastructure/network";
import { deployPulumiOperator } from "./infrastructure/k8s/pulumiOperator";
import { GkeCluster } from "./infrastructure/gke";
import { generateKubeconfig } from "./infrastructure/gke/kubeconfig";
import {clusterName, environment, region} from "./infrastructure/config";
import { Provider } from "@pulumi/kubernetes";


// // Create Network
const network = new Network("cloud", {
    clusterName,
    region,
    environment,
});

// // Create GKE Cluster
// const gke = new GkeCluster("gke", {
//     clusterName,
//     environment,
//     networkId: network.network.id,
//     subnetId: network.subnet.id,
// });
//
// const kubeconfig = generateKubeconfig(gke.cluster);
//
// const k8sProvider = new Provider("gke-provider", {
//     kubeconfig,
// });
//
// export interface gke {
// }
//
// // Deploy the operator
// deployPulumiOperator({ provider: k8sProvider });