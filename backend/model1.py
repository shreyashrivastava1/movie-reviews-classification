##
from datasets import load_dataset

dataset = load_dataset("dair-ai/emotion", cache_dir="./huggingface_datasets")

print(dataset)
