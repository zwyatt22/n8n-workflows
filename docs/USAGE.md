# Usage

## Adding a Workflow

1. Export your workflow from n8n as a JSON file.
2. Place it in the appropriate subfolder under `workflows/` (create a new folder for each service/domain as needed).

## Running Helper Scripts

- Example: To run the deploy script, make it executable and run:

    ```sh
    chmod +x services/deploy.sh
    ./services/deploy.sh
    ```

## Adding Custom Nodes

- Place your custom node code in `custom-nodes/<your-node>/`.

---

For more details, see the [n8n documentation](https://docs.n8n.io/).