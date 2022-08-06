terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.24.0"
    }
  }
  backend "local" {
    path = "./.workspace/terraform.tfstate"
  }
}

provider "aws" {
  region = "sa-east-1"
}

resource "aws_s3_bucket" "bucket" {
  bucket        = "bucket-s3-web-56789"
  force_destroy = true
}

resource "aws_s3_bucket_acl" "default" {
  bucket = aws_s3_bucket.bucket.id
  acl    = "public-read"
}

resource "aws_s3_object" "object" {
  bucket       = aws_s3_bucket.bucket.bucket
  key          = "index.html"
  source       = "../index.html"
  etag         = filemd5("../index.html")
  acl          = "public-read"
  content_type = "text/html"
}

resource "aws_s3_bucket_website_configuration" "default" {
  bucket = aws_s3_bucket.bucket.bucket

  index_document {
    suffix = "index.html"
  }
}
