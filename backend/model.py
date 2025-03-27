import pandas as pd
from datasets import load_dataset
from transformers import BertTokenizer, BertForSequenceClassification, Trainer, TrainingArguments
import torch
import pickle

# Load the emotion dataset
dataset = load_dataset("dair-ai/emotion", cache_dir="./dataset_cache")

# Convert dataset to Pandas DataFrame
train_df = pd.DataFrame(dataset["train"])
test_df = pd.DataFrame(dataset["test"])

# Load BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Tokenize dataset
def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)

train_encodings = tokenize_function(train_df)
test_encodings = tokenize_function(test_df)

# Convert labels
labels = train_df["label"].values
test_labels = test_df["label"].values

# Convert to torch tensors
train_encodings = {key: torch.tensor(val) for key, val in train_encodings.items()}
test_encodings = {key: torch.tensor(val) for key, val in test_encodings.items()}
train_labels = torch.tensor(labels)
test_labels = torch.tensor(test_labels)

# Define model
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=6)

# Define training arguments
training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01,
)

# Define trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_encodings,
    eval_dataset=test_encodings,
)

# Train model
trainer.train()

# Save model
model.save_pretrained("bert_emotion_model")
tokenizer.save_pretrained("bert_emotion_model")
