import openai

print(openai.__version__)

# # Set up your OpenAI API key
# openai.api_key = "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"

# # Send a text prompt for fashion image generation
# response = openai.Image.create(
#     prompt="a red dress with floral patterns",
#     n=1,
#     size="1024x1024"
# )

# # Get the generated image URL
# image_url = response['data'][0]['url']
# print(f"Generated image URL: {image_url}")
