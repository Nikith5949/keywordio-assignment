# Generated by Django 4.1.1 on 2022-09-10 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('books', '0005_delete_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=36, unique=True)),
                ('description', models.TextField(blank=True, max_length=300)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=6)),
                ('book_created', models.DateField(auto_now=True)),
                ('is_published', models.BooleanField(default=False)),
                ('author', models.CharField(max_length=30)),
            ],
        ),
    ]
