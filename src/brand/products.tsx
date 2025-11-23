import { Divider, Grid2, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { motion, Variants } from 'motion/react'
import { Category, Product } from '../utils/JSONTypes'
import { getProducts } from '../utils/api'
import { useTranslation } from 'react-i18next'
import { Image } from '../components'
import { useWindow } from '../hooks'
import { ProductBackdrop } from './productBackdrop'

interface ProductsProps {
  label: string
  slug: string
}

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const categoryContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const productItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function Products({label, slug}: ProductsProps) {
  const [categorySets, setCategorySets] = useState<Array<{
    category: Category,
    products: Product[]
  }>>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [t, i18n]= useTranslation('brand')
  const isMobile = useWindow()

  useEffect(() => {
    if (slug) {
      getProducts(slug).then(resp => {
        const categorySets: Array<{
          category: Category,
          products: Product[]
        }> = []
        resp.forEach(product => {
          const index = categorySets.findIndex(s => s.category.id === product.category.id)
          if (index === -1) {
            categorySets.push({
              category: product.category,
              products: [product]
            })
          } else {
            categorySets[index].products.push(product)
          }
        })
        setCategorySets(categorySets)
      })
    }
  }, [slug])

  return <motion.div
    key={`products-${slug}`}
    variants={container}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false }}
  >
    <Stack gap={4}>
      <motion.div variants={item}>
        <Typography variant='h4' sx={{color: 'primary.main'}}>{label} {t('best')}</Typography>
      </motion.div>
      {categorySets.map((set, i) => <motion.div key={i} variants={item}>
        <Stack gap={2}>
          <Typography variant='h4' textAlign='center'>{set.category.name[i18n.language]}</Typography>
          <Divider />
          <motion.div
            variants={categoryContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false }}
          >
            <Grid2 container spacing={2}>
              {set.products.map((product, k) => <Grid2 
                key={k} 
                size={isMobile ? 4 : 3} 
                component={motion.div}
                variants={productItem}
                sx={{transition: '1s', cursor: 'pointer'}}
                onClick={() => setSelectedProduct(product)}
              >
                <Stack gap={2}>
                  <Image srcList={product.image} alt={product.name[i18n.language]} loading='lazy' />
                  <Typography variant='h6' textAlign='center'>{product.name[i18n.language]}</Typography>
                </Stack>
              </Grid2>)}
            </Grid2>
          </motion.div>
        </Stack>
      </motion.div>)}
    </Stack>

    <ProductBackdrop 
      selectedProduct={selectedProduct}
      brandLabel={label}
      onClose={() => setSelectedProduct(null)}
    />
  </motion.div>
}